$(document).ready(function(){
	$('.qbh-shopping-again').on('click',function(){
					$.fn.fullpage.moveTo(1);
				}),
	$('.qbh-down').on('click',function(){
					$.fn.fullpage.moveSectionDown();
				}),

	$('#fullpage').fullpage({
		//给每一屏添加不同颜色
		sectionsColor:['#fadd67','#84a2d4','#ef674d','#fed','#d04759','#84d9ed','#8ac060'],
		// 给整个宣传页添加小圆点导航
		navigation:true,
		// 鼠标移入小圆点显示的文字提示
		// navigationTooltips:['第一屏','第二屏']
		
		//当页面载入之后的回调函数
		//index 索引
		afterLoad:function(onchorLink,index){
			// console.log(index);
			// 第二屏动画
			if(index==2){
				//2 正在打字的搜索框动画
				//让未完成的搜索框显示
				//animate(样式，总时间，速度，回调函数)
				$('.qbh-list-unfinish').animate({
					opacity:1,
					marginRight:-111
				},1000,function(){
					$('.qbh-list-unfinish img:last-child').animate({
						opacity:1
					},1000,function(){
						$('.qbh-list-unfinish').hide();
						// 3 打字完成的搜索框动画
						$('.qbh-list-finish').show().animate({
							width:130,
							marginRight:-270,
							bottom:450
						},1000);
						// 4 沙发列表动画
						$('.qbh-list-sofas').animate({
								width:442
						},1000)
						// 5 顶部广告语动画
						$('.qbh-list-word img:last-child').animate({
							opacity:1
						},1000,function(){
							$(".qbh-down").animate({
								opacity:1
							},500)
						})
					});	
					
				});
			};
			// 第五屏动画
			if(index==5){
				// 手上移
				$('.qbh-payment-hands').animate({
					bottom:0
				},1000,function(){
					// 鼠标变颜色
					$('.qbh-payment-mouse img:first-child').hide();
				})
				// 沙发掉入银行卡
				// 让沙发显示延迟
				$('.qbh-payment-drop').delay(1000).show(0).animate({
					bottom:200
				},1000,function(){
					// 银行卡账单上移
					$('.qbh-payment-bill img:first-child').animate({
						top:-100
					},1000)
					// 沙发下落
					$('.qbh-payment-bill img:last-child').animate({
						top:160
					},1000)
				})
			};
			// 第七屏动画
			if(index==7){
				// 出现星星
				$('.qbh-appraise-star').addClass('star');
				$('.qbh-appraise-haoping').delay(2500).show(0).animate({
					left:50
				},500,function(){
					// 出现好评
					$(this).animate({
						width:72
					},500)
				})
			};
			// 第八屏动画
			if(index==8){
				
				// 当鼠标在第八屏移动
				$(document).mousemove(function(e){
					// 获取鼠标位置
					var x = e.pageX - 85;
					var y = e.pageY+10;
					var yy = $(window).height() - 449;
					y = y<yy?yy:y;
					// 把鼠标位置坐标设置给手
					$('.qbh-shopping-hands').css({
						"left":x,
						"top":y
					})
				})
			}
		},
		//用户离开某个secssion 过渡到新的secssion 触发
		onLeave:function(index,nextIndex,direction){
			if(index==1 && nextIndex==2){
				$(".qbh-down").animate({
					opacity:0
				},500)
			}
			// 第三屏动画
			if(index == 2 && nextIndex ==3){
				// console.log('sofa');
				$('.qbh-list-drop').show().animate({
					bottom:-($(window).height()-260),
					width:207,
					right:630
				},1000,function(){
					$('.qbh-buy-main-choose-false').animate({
						opacity:0
					},1000);
				})
			}
			// 第四屏动画
			if(index == 3 && nextIndex ==4){
				$('.qbh-buy-drop').show().animate({
					bottom:-($(window).height()-232),
					right:510
				},1000,function(){
					$('.qbh-buy-drop').hide();
					// $('.qbh-buy-drop').hide().animate({
					// 	opacity:0,
					// 	right:810,
					// 	bottom:-($(window).height())
					// });
					$('.qbh-info-cart img:last-child').show();
					$('.qbh-info-cart').animate({
						right:-600
					},1000,function(){
						$('.qbh-info-user').animate({
							opacity:1
						},2000,function(){
							$('.qbh-info-user img:last-child').show();
							$('.qbh-info-word img:last-child').show();
						});
						
					})
				})
			}
			// 第六屏动画
			if(index == 5 && nextIndex ==6){
				// 沙发掉落
				$('.qbh-payment-drop2').show().animate({
					bottom:-($(window).height()-400),
					width:80
				},1200,function(){
					$(this).css({'opacity':0})
				})
				// 盒子接沙发
				$('.qbh-delivery-box').show().animate({
					bottom:410,
					left:240
				},1000,function(){
					// 盒子缩小进货车
					$(this).animate({
						bottom:90,
						left:450,
						width:20
					},1000,function(){
						$(this).css({'opacity':0});
						// 车走 出现地址
						$('.qbh-delivery-word img:first-child').animate({
							opacity:0
						});
						$('.qbh-delivery-running img:nth-child(2)').show();
						$('.qbh-delivery').animate({
							// 让背景图移动
							backgroundPositionX:'100%'
						},2000,function(){
							// 车停 出现送货员
							$('.qbh-delivery-word img:first-child').hide();
							$('.qbh-delivery-running img:nth-child(3)').animate({
								height:305,
								bottom:112
							},1000,function(){
								// 送货员前进
								$(this).animate({
									right:-150
								},1000,function(){
									// 买家开门
									$('.qbh-delivery-door').show();
									// 买家出现
									$('.qbh-delivery-buyer').animate({
										height:294
									},1000,function(){
										// 请收获
										$('.qbh-delivery-shouhuo').animate({
											opacity:1
										},1000)
									})
								})
								
							})

						})
					})
				})
			}
		}
	});
})