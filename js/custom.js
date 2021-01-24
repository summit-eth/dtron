$(function() {
	
	
	$("#trx_slider").on("input", function(e) {
		$("#trx_value").val($("#trx_slider").val());
	});
	
	
	$("#trx_value").on("input", function(e) {
		$("#trx_slider").val($("#trx_value").val());
	});

});

(function() {
	'use strict';

	const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_upline",
				"type": "address"
			}
		],
		"name": "invest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contractInfo",
		"outputs": [
			{
				"name": "_invested",
				"type": "uint256"
			},
			{
				"name": "_withdrawn",
				"type": "uint256"
			},
			{
				"name": "_referrals",
				"type": "uint256"
			},
			{
				"name": "_reinvested",
				"type": "uint256"
			},
			{
				"name": "_starting_date",
				"type": "uint256"
			},
			{
				"name": "_total_users",
				"type": "uint256"
			},
			{
				"name": "_total_insurance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"name": "_total_income",
				"type": "uint256"
			},
			{
				"name": "_total_invested",
				"type": "uint256"
			},
			{
				"name": "_total_withdrawn",
				"type": "uint256"
			},
			{
				"name": "_total_reinvested",
				"type": "uint256"
			},
			{
				"name": "_total_referrals",
				"type": "uint256"
			},
			{
				"name": "_total_withdrawnreferrals",
				"type": "uint256"
			},
			{
				"name": "_remaining_income",
				"type": "uint256"
			},
			{
				"name": "_last_withdraw",
				"type": "uint256"
			},
			{
				"name": "_user_upline",
				"type": "address"
			},
			{
				"name": "_downlines",
				"type": "uint256[12]"
			},
			{
				"name": "_investments",
				"type": "uint256[3][100]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "topGlobalsInfo",
		"outputs": [
			{
				"name": "_top1investor",
				"type": "address"
			},
			{
				"name": "_top1investoramt",
				"type": "uint256"
			},
			{
				"name": "_top2investor",
				"type": "address"
			},
			{
				"name": "_top2investoramt",
				"type": "uint256"
			},
			{
				"name": "_top3investor",
				"type": "address"
			},
			{
				"name": "_top3investoramt",
				"type": "uint256"
			},
			{
				"name": "_top1referral",
				"type": "address"
			},
			{
				"name": "_top1referralamt",
				"type": "uint256"
			},
			{
				"name": "_top2referral",
				"type": "address"
			},
			{
				"name": "_top2referralamt",
				"type": "uint256"
			},
			{
				"name": "_top3referral",
				"type": "address"
			},
			{
				"name": "_top3referralamt",
				"type": "uint256"
			},
			{
				"name": "_topreinvestor",
				"type": "address"
			},
			{
				"name": "_topreinvestoramt",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_reinvest",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "referral_rates",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "_setMarketing",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_withdrawn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_insurance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "_setInsurance",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_invested",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "top_referrals",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "globalrewards_last_withdraw",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "starting_date",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "upline",
				"type": "address"
			},
			{
				"name": "invested",
				"type": "uint256"
			},
			{
				"name": "reinvested",
				"type": "uint256"
			},
			{
				"name": "withdrawn",
				"type": "uint256"
			},
			{
				"name": "referrals",
				"type": "uint256"
			},
			{
				"name": "withdrawn_referrals",
				"type": "uint256"
			},
			{
				"name": "last_withdraw",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "top_investors",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "_transferOwnership",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_users",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "_setDeveloper",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_reinvested",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "top_reinvestor",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_referrals",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_marketingAddr",
				"type": "address"
			},
			{
				"name": "_developerAddr",
				"type": "address"
			},
			{
				"name": "_insuranceAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}
];

    let contract = null;

    let VueTRON = {
        data() {
            return {
                tron: {	
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created() {
            let self = this,
                tries = 0;

            setTimeout(function initTimer() {
                if(!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;

                self.tron.tronWeb = !!window.tronWeb;

                window.tronWeb.on('addressChanged', function() {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                });

                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if(!self.tron.auth) setTimeout(chechAuth, 200);
                    else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
        },
        methods: {
            getTronWeb() {
                return new Promise((resolve, reject) => {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            }
        }
    };

	window.App = new Vue({
  		mixins: [VueTRON],
		el: '#App',
		data: {
            default_upline: 'TRuAr8z9eCNXSxzcJKAFo9z4zJd2SS76EG',
            upline: 'TRuAr8z9eCNXSxzcJKAFo9z4zJd2SS76EG',
            contract_address: 'TLsG6PzMAx9cJ4qm6MPibZPkrnaFooWBQ7',
            contract: {
                invested: 0,
                withdrawn: 0,
                referrals: 0,
                insurance: 0,
				launch_date: 1611475200,
				starting_date: 1611475200
            },
			current_date: new Date().getTime()/1e3,
            user: {
                address: '',
            	trx: 0,
                invested: 0,
                withdrawn: 0,
                reinvested: 0,
                referrals: 0,
                remaining_income: 0,
                last_withdraw: 0,
                income: 0,
                upline: "",
                downlines: [0,0,0,0,0,0,0,0,0,0,0,0],
				investments: [[0,0,0,0]]
            },
            calc: {
            	amount: 50,
            	amountri: 10
            },
            events: []
		},
		mounted() {
			
            let m = location.search.match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) {
            	this.upline = m[1];
            	document.cookie = "upline=" + this.upline + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
            }

            m = document.cookie.match(/upline=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) this.upline = m[1];

		    if(!document.cookie.match(/coopolice=1/)) {
		    	this.notice('We use cookies to store temporary data of your current session. If you agree to our use of cookies, continue using our dApp.', '653aba',  0).then(() => (document.cookie = 'coopolice=1; Max-Age=31536000; path=/'));
		    }

            setInterval(() => {
                this.getContractInfo();
                this.getUserInfo();
            }, 3000);
		},
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));

                    this.getContractInfo();
                    this.getEventsList();
                    this.getUserInfo();
                });
            }
        },
		methods: {
			// colors: primary = 004e92; success = 4ca1af; warning = f7bb97; error = ef629f
			notice(msg, color = '004e92', time = 3000) {
				return new Promise((resolve, reject) => {
					let wrap = $('<div style="position:fixed; left:calc(50% - 150px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '653aba') + '; border-radius:10px; color:#fff; padding:20px 20px; font:14px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>')
						.on('click', () => { wrap.remove(); resolve(); })
						.appendTo('body');
					if(time) setTimeout(() => { wrap.remove(); }, time);
				});
			},
			copyText(value) {
				let s = document.createElement('input');
				s.value = value;
				document.body.appendChild(s);

				if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
					s.contentEditable = true;
					s.readOnly = false;
					let range = document.createRange();
					range.selectNodeContents(s);
					let sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
					s.setSelectionRange(0, 999999);
				} else
					s.select();

				try {
					document.execCommand('copy');
					this.notice('Link copied to clipboard', '653aba');
				} catch (err) {}

				s.remove();
			},
            getContractInfo() {
                this.getTronWeb().then(tronWeb => {
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
                        contract.contractInfo().call().then(res => {
                        	this.contract.invested = parseFloat(tronWeb.fromSun(res._invested));
                        	this.contract.withdrawn = parseFloat(tronWeb.fromSun(res._withdrawn));
                            this.contract.referrals = parseFloat(tronWeb.fromSun(res._referrals));
                        	this.contract.reinvested = parseFloat(tronWeb.fromSun(res._reinvested));
                        	this.contract.total_users = parseFloat(tronWeb.fromSun(res._total_users));
                        	this.contract.insurance = parseFloat(tronWeb.fromSun(res._total_insurance));
							this.contract.starting_date = res._starting_date;
							this.current_date = Math.round(new Date().getTime()/1e3);
                        });
                        contract.topGlobalsInfo().call().then(res => {
                        	this.contract.top1investor = tronWeb.address.fromHex(res._top1investor);
                        	this.contract.top2investor = tronWeb.address.fromHex(res._top2investor);
                        	this.contract.top3investor = tronWeb.address.fromHex(res._top3investor);
                        	this.contract.top1referral = tronWeb.address.fromHex(res._top1referral);
                        	this.contract.top2referral = tronWeb.address.fromHex(res._top2referral);
                        	this.contract.top3referral = tronWeb.address.fromHex(res._top3referral);
                        	this.contract.topreinvestor = tronWeb.address.fromHex(res._topreinvestor);
                        	this.contract.top1investoramt = parseFloat(tronWeb.fromSun(res._top1investoramt));
                        	this.contract.top2investoramt = parseFloat(tronWeb.fromSun(res._top2investoramt));
                        	this.contract.top3investoramt = parseFloat(tronWeb.fromSun(res._top3investoramt));
                        	this.contract.top1referralamt = parseFloat(tronWeb.fromSun(res._top1referralamt));
                        	this.contract.top2referralamt = parseFloat(tronWeb.fromSun(res._top2referralamt));
                        	this.contract.top3referralamt = parseFloat(tronWeb.fromSun(res._top3referralamt));
                        	this.contract.topreinvestoramt = parseFloat(tronWeb.fromSun(res._topreinvestoramt));
                        });
                    }
                });
            },
            getUserInfo() {
                this.getTronWeb().then(tronWeb => {
                    tronWeb.trx.getBalance(this.tron.account).then(res => {
                        this.user.trx = parseFloat(tronWeb.fromSun(res));
                    });
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
						contract.userInfo(this.tron.account).call().then(res => {
							this.user.income = parseFloat(tronWeb.fromSun(res._total_income));
							this.user.invested = parseFloat(tronWeb.fromSun(res._total_invested));
							this.user.withdrawn = parseFloat(tronWeb.fromSun(res._total_withdrawn));
							this.user.reinvested = parseFloat(tronWeb.fromSun(res._total_reinvested));
							this.user.referrals = parseFloat(tronWeb.fromSun(res._total_referrals));
							this.user.withdrawn_referrals = parseFloat(tronWeb.fromSun(res._total_withdrawnreferrals));
							this.user.remaining_income = parseFloat(tronWeb.fromSun(res._remaining_income));
							this.user.last_withdraw = res._last_withdraw;
							this.user.upline = tronWeb.address.fromHex(res._user_upline);
							this.user.downlines = res._downlines;
							this.user.investments = res._investments;
						});
                    }
                });
            },
            getEventsList() {
            	//fetch('https://api.trongrid.io/v1/contracts/' + this.contract_address + '/events?event_name=&only_confirmed=true&order_by=block_timestamp%2Cdesc').then(r => r.json()).then(res => {
            	fetch('https://api.shasta.trongrid.io/v1/contracts/' + this.contract_address + '/events?event_name=&only_confirmed=true&order_by=block_timestamp%2Cdesc').then(r => r.json()).then(res => {
            	//fetch('https://testapi.tronex.io/events/' + this.contract_address + '').then(r => r.json()).then(res => {
					if(res.data) {
						res.data.forEach(v => {
							this.events.push({
								time: v.block_timestamp,
								type: v.event_name,
								amount: (v.result.amount / 1e6) || 0,
								tx: v.transaction_id
							});
						});
					}
            	});
            },
            deposit(amount) {
                amount = parseFloat(amount) || 0;
                if(amount >= 50) {
                    this.getTronWeb().then(tronWeb => {
                        this.notice('Confirm transaction', '653aba');
                        contract.invest(this.upline).send({
                            callValue: tronWeb.toSun(amount),
                            shouldPollResponse: true
                        }).then(res => {
                            this.getUserInfo();
                            this.notice('Transaction successful', '653aba');
                        });
                    });
                }
            },
            withdraw(amount) {
                amount = parseFloat(amount) || 0;
                if(amount < 10) return;
                this.getTronWeb().then(tronWeb => {
                    this.notice('Confirm transaction', '653aba');
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    contract.withdraw(tronWeb.toSun(amount)).send({
                        shouldPollResponse: true
                    }).then(res => {
                        this.getUserInfo();
                        this.notice('Transaction successful', '653aba');
                    });
                });
            }
		}
	});
})();