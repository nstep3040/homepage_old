document.write(`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="naver-site-verification" content="40eb32b689e3f6b1c4116ba649c3d1414064d56e" />
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/header.css">
    <link rel="stylesheet" href="/css/sub1.css">
    <link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosanskr.css">
	<style>
		* { font-family:'Noto Sans KR','나눔 고딕','Nanum Gothic','맑은 고딕' }
	</style>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script>
		menu=[
			{name:'HOME', link:'/index.html', sub:null},
			{name:'INDUSTRY',link:'/html/sub_1.html', sub:
				[
					{name:'자동화 부품', link:'/html/sub_1.html',sub:
						[
							{name:'진공 부품', link:'/html/sub_1.html',sub:null},
							{name:'진공리프트시스템', link:'/html/sub_2.html',sub:null},
							{name:'마그네틱 그리퍼', link:'/html/sub_3.html',sub:null},
							{name:'산업용 자동화 케이블', link:'/html/sub_4.html',sub:null},
							{name:'호스,케이블 보호', link:'/html/sub_5.html',sub:null}
						]
					},
					{name:'RFID', link:'/html/sub_6.html',sub:
						[
							{name:'트랜스폰더', link:'/html/sub_7.html',sub:null},
							{name:'RFID', link:'/html/sub_8.html',sub:null},
							{name:'안테나', link:'/html/sub_9.html',sub:null},
							{name:'동물용 칩(AMPS)', link:'/html/sub_10.html',sub:null}
						]
					},
					{name:'수중장비',link:'/html/sub_11.html',sub:
						[
							{name:'수중커넥터', link:'/html/sub_11.html',sub:null},
							{name:'소나', link:'/html/sub_12.html',sub:null},
							{name:'ROV', link:'/html/sub_13.html',sub:null}
						]
					}
				]
			},
			{name:'SOFTWARE',link:'/html/sub_17.html',sub:
				[
					{name:'소프트웨어',link:'/html/sub_17.html',sub:
						[
							{name:'운영체제', link:'/html/sub_17.html',sub:null},
							{name:'사무용 프로그램', link:'/html/sub_18.html',sub:null},
							{name:'3D 응용프로그램', link:'/html/sub_19.html',sub:null},
							{name:'그래픽 소프트웨어', link:'/html/sub_20.html',sub:null},
							{name:'개발/연구프로그램', link:'/html/sub_21.html',sub:null},
							{name:'보안프로그램', link:'/html/sub_22.html',sub:null}
						]
					}
				]
			},
			{name:'DOWNLOADS',link:'/html/sub_14.html',sub:
				[
					{name:'자동화 부품', link:'/html/sub_1.html',sub:null},
					{name:'RFID', link:'/html/sub_6.html',sub:null},
					{name:'수중장비',link:'/html/sub_11.html',sub:null}
				]
			},
			{name:'CONTACT US',link:'/html/sub_15.html',sub:
				[
					{name:'자동화 부품', link:'/html/sub_1.html',sub:null},
					{name:'RFID', link:'/html/sub_6.html',sub:null},
					{name:'수중장비',link:'/html/sub_11.html',sub:null}
				]
			}

		];
		$(function(){
			$(".header .inner").html("");
			$.each(menu,function(e){
				$('<p style="margin:0"><a href="'+this.link+'">'+this.name+'</a></p>').appendTo(".header .inner");
			});
			if($(".lnb1").length!=0){
				sub=<?php echo $sub?$sub:0?>;
				sub2=<?php echo $sub2?$sub2:0?>;
				$(".lnb1").html("");
				$.each(menu[sub].sub,function(a,b){
					if(this.sub!=null && sub2==a){
						$tmp=$('<h3><a href="#">'+this.name+'</a></h3>');
						$.each(this.sub,function(a,b){
							$('<p><a href="'+b.link+'">'+b.name+'</a></p>').appendTo($tmp);
						});
						$tmp.appendTo(".lnb1");
					} else {
						$tmp=$('<h3><a href="'+this.link+'">'+this.name+'</a></h3>');
						$tmp.appendTo(".lnb1");
					}
				});
			}
		});
	</script>
    <title>넥스텝에 오신것을 환영합니다</title>
</head>
<body>
    <div class="wrap">
        <div class="header">
            <img src="/img/header.jpg">
            <div class="inner">
                <p><a href="/index.html">HOME</p></a>
                <p><a href="/html/sub_1.html">INDUSTRY</p></a>
                <p><a href="#">SOFTWARE</p></a>
                <p><a href="/html/sub_14.html">DOWNLOADS</p></a>
                <p><a href="/html/sub_15.html">CONTACT US</p></a>
            </div>
        </div>
        </head>
        <div class="all">
`);
