<!doctype html>
<html lang="en-us">
<head>
<link rel="icon" href="favicon.ico">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="description" content="Modern & decentralized short-term investments powered by the tron blockchain network.">
<title>//epictron.com</title>
<link rel="stylesheet" href="fonts/import.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/jqueryui.css">
<link rel="stylesheet" href="css/custom.css">
<link rel="stylesheet" href="css/custom-slider.css">
<script src="js/jquery.min.js"></script>
<script src="js/jquery.ui.js"></script>
<script src="js/jquery.ui.touch-punch.min.js"></script>
<script src="js/jquery.toast.min.js"></script>
<script src="js/jquery.cookie.min.js"></script>
<script src="js/moment.js"></script>
<script src="js/countdown.js"></script>
<script src="js/tronweb.js"></script>
<script>
setTimeout(function() {
top.location.href = top.location.href;
}, 50000000);
</script>
<style>[v-cloak] { display:none; }</style>
</head>
<body>

<div class="b-app" id="App" v-cloak>

	<div id="c_hero" class="container" style="background: none !important; border: none !important">
		<img src="img/logo.png">
	</div>
	
	<!--div class="container">
		<!--div class="sub">
			<h4>TOTAL TRX INVESTED</h4>
			<h6>1000trx</h6>
		</div>
		<div class="sub">
			<h4>TOTAL TRX REFERRAL REWARDED</h4>
			<h6>1000trx</h6>
		</div>
	</div-->
	
	<div class="container" v-if="contract.launch_date > current_date">
		<div class="sub">
			<h1 style="text-align: center">Launching in {{ countdown(new Date(contract.launch_date * 1000)).toString() }}!</h1>
		</div>
	</div>
	
	<div id="c_invest" class="container" v-if="user.total_invested > 0">
		<!--div class="sub">
			<h1>Invest</h1>
			<input type="range" min="50" max="5000" value="100" step="100" id="trx_slider" v-model.number="calc.amount" @change="calc.amount = calc.amount < 50 ? 50 : calc.amount">
			<input type="number" min="50" placeholder="100 trx" value="100" id="trx_value" v-model.number="calc.amount" @change="calc.amount = calc.amount < 50 ? 50 : calc.amount">
			<button id="btn_invest" @click.prevent="deposit(calc.tarif, calc.amount)">INVEST</button>
		</div-->
		<div class="sub">
			<h1>Dashboad</h1>
			<h5>Total Invested:</h5><h6 id="total_invest">{{ user.total_invested }}</h6>
			<h5>Referral Bonus:</h5><h6 id="total_refer">{{ user.total_match_bonus }}</h6>
			<h5 v-if="contract.launch_date < current_date">Withdrawn TRX:</h5><h6 id="total_refer" v-if="contract.launch_date < current_date">{{ user.total_withdrawn }}</h6>
		</div>
		<div class="sub" v-if="contract.launch_date > current_date">
			<h4>You can withdraw your earnings after launch.</h4>
		</div>
		<div class="sub" v-if="contract.launch_date < current_date">
			<h5>Realtime Withdrawable</h5>
			<h6>{{ user.for_withdraw }}</h6>
			<button id="btn_withdraw" @click.prevent="withdraw()">WITHDRAW</button>
		</div>
	</div>
	
	<div class="container">
		<div class="sub" v-if="user.total_invested == 0">
			<h6>No backdoors, no cheating, fully decentralized!</h6>
			<button id="view_contract" @click="window.open('https://tronscan.org/#/contract/TSLaYWjzXTNaQcPE1j6tagF6vqtStNtz1x')">VERIFIED SMART CONTRACT &nbsp;&nbsp;[&#x2197;]</button>
		</div>
		<div class="sub" v-if="contract.launch_date > current_date">
			<h1>Pre-launch Referral Bonuses!</h1>
			<h4>When they invest, the referral bonus is automatically added to your account.</h4>
			<table>
				<thead><th>Level</th><th>Referral Bonus</th><th v-if="user.total_invested > 0">Referrals</th></thead>
				<tr><td>1</td><td><span v-if="contract.launch_date > current_date" highlight>15% (+5%) &#128293;</span><span v-else>15%</span></td><td v-if="user.total_invested > 0" id="ref_lv1">{{ user.structure[0] }}</td></tr>
				<tr><td>2</td><td><span v-if="contract.launch_date > current_date" highlight>10% (+5%) &#128293;</span><span v-else>10%</span></td><td v-if="user.total_invested > 0" id="ref_lv2">{{ user.structure[1] }}</td></tr>
				<tr><td>3</td><td><span v-if="contract.launch_date > current_date" highlight>5% (+5%) &#128293;</span><span v-else>5%</span></td><td v-if="user.total_invested > 0" id="ref_lv3">{{ user.structure[2] }}</td></tr>
			</table>
		</div>
		<div class="sub" v-if="user.total_invested == 0 && contract.launch_date <= current_date"><h4>Contract running for {{ countdown(new Date(contract.launch_date * 1000)).toString() }}</h4></div>
		<div class="sub">
			<h1>Invest<span v-if="user.total_invested != 0" bold>ment Choices</span><span v-if="user.total_invested == 0" bold>ment Opportunities</span></h1>
			<h4>You can invest up to 100 times!</h4>
			<table>
				<thead><th>Daily ROI</th><th>Active Days</th><th>Total ROI</th><th>Amount</th><th>&nbsp;</th></thead>
				<tr><td>20%</td><td>6</td><td>120%</td><td bold> 200 trx</td><td><button @click.prevent="deposit(0, 200)">Invest</button></td></tr>
				<tr><td>24%</td><td>6</td><td>144%</td><td bold> 500 trx</td><td><button @click.prevent="deposit(1, 500)">Invest</button></td></tr>
				<tr><td>30%</td><td>5</td><td>150%</td><td bold> 1000 trx</td><td><button @click.prevent="deposit(2, 1000)">Invest</button></td></tr>
				<tr><td>40%</td><td>4</td><td>160%</td><td bold> 2500 trx</td><td><button @click.prevent="deposit(3, 2500)">Invest</button></td></tr>
				<tr><td>50%</td><td>4</td><td>200%</td><td bold> 5000 trx</td><td><button @click.prevent="deposit(4, 5000)">Invest</button></td></tr>
				<tr><td>60%</td><td>4</td><td>240%</td><td bold> 8000 trx</td><td><button @click.prevent="deposit(5, 8000)">Invest</button></td></tr>
				<tr><td>80%</td><td>3</td><td>240%</td><td bold> 10000 trx</td><td><button @click.prevent="deposit(6, 10000)">Invest</button></td></tr>
			</table>
		</div>
		<div class="sub" v-if="user.total_invested > 0 && tronWeb != undefined">
			<h1>Investment Data</h1>
			<table>
				<thead><th>Amount</th><th>Ends in</th><th>Withdrawable</th></thead>
				<tr v-for="dep in user.deposits" v-if="dep[1] != 0">
					<td>{{ tronWeb.fromSun(dep[1]) }} trx</td><td><!--{{ moment().add(dep[2], 'seconds').fromNow() }}-->{{ countdown(new Date(new Date().getTime() + (dep[2] * 1000))).toString() }}</td><td>{{ tronWeb.fromSun(dep[3]) }} trx</td>
				</tr>
			</table>
		</div>
	</div>
	
	<div id="c_data" class="container">
		<div class="sub" v-if="contract.launch_date <= current_date">
			<h1>Referral<span v-if="user.total_invested > 0" bold>s</span><span v-if="user.total_invested == 0" bold> Opportunities</span></h1>
			<h4>When they invest, the referral bonus is automatically added to your account!</h4>
			<table>
				<thead><th>Level</th><th>Referral Bonus</th><th v-if="user.total_invested > 0">Referrals</th></thead>
				<tr><td>1</td><td><span v-if="contract.launch_date > current_date" highlight>Prelaunch 15% + 5%! &#128293;</span><span v-else>15%</span></td><td v-if="user.total_invested > 0" id="ref_lv1">{{ user.structure[0] }}</td></tr>
				<tr><td>2</td><td><span v-if="contract.launch_date > current_date" highlight>Prelaunch 10% + 5%! &#128293;</span><span v-else>10%</span></td><td v-if="user.total_invested > 0" id="ref_lv2">{{ user.structure[1] }}</td></tr>
				<tr><td>3</td><td><span v-if="contract.launch_date > current_date" highlight>Prelaunch 5% + 5%! &#128293;</span><span v-else>5%</span></td><td v-if="user.total_invested > 0" id="ref_lv3">{{ user.structure[2] }}</td></tr>
			</table>
		</div>
		<div class="sub" v-if="upline != default_upline">
			<h6>Referred by</h6>
			<h5>{{ upline }}</h5>
		</div>
		<div class="sub" v-if="user.total_invested > 0">
			<h6>Your Referral Link</h6>
			<h5>{{ location.origin }}/?ref={{ tron.account }}</h5>
			<button class="copytext" @click="copyText(top.location.href + '/?ref=' + tron.account)">COPY</button>
		</div>
		<div class="sub" v-if="user.total_invested == 0">
			<h6>Invest once to get your referral link!</h6>
		</div>
	</div>

	<div class="container">
		<div class="sub">
			<h6>Questions?</h6>
			<button id="view_telegram">JOIN OUR TELEGRAM GROUP &nbsp;&nbsp;[&#x2197;]</button>
			<button id="view_contract" @click="window.open('https://tronscan.org/#/contract/TSLaYWjzXTNaQcPE1j6tagF6vqtStNtz1x')" v-if="user.total_invested > 0">VERIFIED SMART CONTRACT &nbsp;&nbsp;[&#x2197;]</button>
		</div>
	</div>
	
	<div class="container" v-if="contract.launch_date < current_date">
		<div class="sub">
			<h4 style="text-align: center">Contract running for {{ countdown(new Date(contract.launch_date * 1000)).toString() }}!</h4>
			
		</div>
	</div>

	<div class="container" style="Box-shadow: none; border: none; background: none; color: #dbf">
		&copy; epictron.com
	</div>
	
</div>

<script src="js/vue.js"></script>
<script src="js/custom.js"></script>
</body>
</html>