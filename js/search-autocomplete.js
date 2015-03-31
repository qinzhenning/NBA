/*
用于导航栏搜索提示匹配
*/

// 配置每个item项
$.widget( "custom.autocomplete",
   $.ui.autocomplete, {
    _renderItem: function( ul, item ) {
    return $( "<li>" )
      .attr("class","auto-search")
      .append( item.label+"<span>["+ item.category +"]</span>" )
      .appendTo( ul );
  }
});
// 数据源匹配
$(function() {

  $( "#search" ).autocomplete({
    // source: function( request, response ) {
    //   $.ajax({
    //     url: "http://gd.geobytes.com/AutoCompleteCity",
    //     dataType: "jsonp",
    //     data: {
    //       q: request.term //请求格式: http://gd.geobytes.com/AutoCompleteCity?q=输入
    //     },
    //     success: function( data ) {
    //       response( data );
    //     }
    //   });
    // },
    source: [ { label: "科比-湖人", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "科比", category: "球员" },
              { label: "哈登", category: "球员" },
              { label: "杜兰特", category: "球员" },
              { label: "韦德", category: "球员" },
              { label: "勒布朗詹姆斯", category: "球员" },
              { label: "库里", category: "球员" },
              { label: "保罗", category: "球员" },
              { label: "湖人", category: "球队" },
              { label: "火箭", category: "球员" }],
    select: function( event, ui ) {
      //选择一个选项后的事件
    },
    open: function() {
      $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
    },
    close: function() {
      $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
    }

  });
});