function renderPagination(defaultPages, pages, page) {
	//defaultPages为奇数
	$(`ul.pagination>li:not(:lt(2), :gt(${$('ul.pagination>li').length - 3}))`).remove();
	$('ul.pagination>li').data('mark', 0);
	$('ul.pagination>li.disabled').removeClass('disabled');

	if(pages == 0){
		$('ul.pagination>li').addClass('disabled');
	}else{
		$('ul.pagination>li:first').data('mark', 1);
		$('ul.pagination>li:last').data('mark', pages);
		if(page == 1){
			$('ul.pagination>li:eq(1)').addClass('disabled');
		}
		if(page == pages){
			$('ul.pagination>li:last').prev().addClass('disabled');
		}

		var str = '';
		if(pages < defaultPages){
			for(let i=1; i<=pages; i++){
				if(i == page){
					str += `<li class="active"><a href="javascript:;">${i}</a></li>`;
				}else{
					str += `<li><a href="javascript:;">${i}</a></li>`;
				}
			}
		}else{
			if(page <= Math.ceil(defaultPages/2)){
				for(let i=1; i<=defaultPages; i++){
					if(i == page){
						str += `<li class="active"><a href="javascript:;">${i}</a></li>`;
					}else{
						str += `<li><a href="javascript:;">${i}</a></li>`;
					}
				}
				str += '<li><a href="javascript:;">...</a></li>';
			}
			else if(page >= pages - Math.floor(defaultPages/2)){
				str += '<li><a href="javascript:;">...</a></li>';
				for(let i=pages - defaultPages + 1; i<=pages; i++){
					if(i == page){
						str += `<li class="active"><a href="javascript:;">${i}</a></li>`;
					}else{
						str += `<li><a href="javascript:;">${i}</a></li>`;
					}
				}
			}else{
				str += '<li><a href="javascript:;">...</a></li>';
				for(let i=page - Math.floor(defaultPages/2); i<=page + Math.floor(defaultPages/2); i++){
					if(i == page){
						str += `<li class="active"><a href="javascript:;">${i}</a></li>`;
					}else{
						str += `<li><a href="javascript:;">${i}</a></li>`;
					}
				}
				str += '<li><a href="javascript:;">...</a></li>';console.log(str);
			}
		}
		$('ul.pagination>li:eq(1)').after($(str));
	}

}