<?php
/*
Template Name: page-register
*/
 ?>
<?php $root = get_site_url(); ?>

<!DOCTYPE html>
<html lang=en>

<head>
	<meta charset=utf-8>
	<meta http-equiv=X-UA-Compatible content="IE=edge">
	<meta name=viewport content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no">
	<link rel=icon href=/favicon.ico>
	<title>Patricia</title>

	<link href="<?php bloginfo("template_directory")?>/assets/login/css/vendors~app.5a791a0c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/app.cdff32df.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/Bitcoin.routes.90b42c5f.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/ConfirmReg.routes.476812ce.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/ForgotPassword.routes.460db958.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/Giftcards.routes.a70f9a44.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/Home.routes.ab9d77ea.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/Login.routes.c8fdf386.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/Paypal.routes.9c7af177.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/PerfectMoney.routes.d2485cd8.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/Rates.routes.129c1632.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/RegisterBank.routes.6c43b400.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/RegisterEmail.routes.7076c324.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/RegisterName.routes.0943841c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/RegisterPassword.routes.1aaf4e94.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/RegisterPhone.routes.77a307f6.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/Settings.routes.84734b0f.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/TradeGiftcards.routes.a4d91881.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/VerifyPhone.routes.446cacb2.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/authverify2faCode.routes.836c113c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-02bc0153.7ab96c14.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-04124880.8e19527d.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-044dff20.114d284a.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-060b5254.e3520faf.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-071f5770.708e8647.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-09248ac6.5fbacdde.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-0a20cdb4.ef20ef3e.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-0a9e7790.87afc35e.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-0c14e09e.721b75f3.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-0c8eba2c.e1fe346c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-0d256c58.8423fa85.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-0e11cead.938a0b83.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-10d24c19.d06d184b.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-11e19c3e.9382de2b.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-11f8755c.8085c673.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-145cffda.95744665.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-192d7b8a.76af1092.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-1a392542.edb4dc82.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-1a6e77ea.93d1d627.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-1acf966e.cf6202c9.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-1e37823c.ff068c19.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-203a3a0b.8bb3b21d.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-214e19fa.45c9dbad.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-23da21cd.9cdc52ab.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-28cbbf04.a9d4f737.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-29e08a5f.5c213d46.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-2a2efa78.7bf1184e.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-2be07dcf.e3adb853.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-2c55d9ca.505fe6f9.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-2d894bf7.d8ef1b01.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-2e486dbd.0133c605.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-2fff909d.93ad82c1.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-31b53a88.74f82679.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-3328850e.9df557fb.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-35d3ed74.bb5ce7cd.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-39915385.c876873c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-39ad6f7b.639396e8.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-3b7d8378.785b415f.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-3cb47ed4.6cfabb88.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-3e93e729.d998e4da.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-3fed10be.f1ddd11f.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-40044576.8e45cf6a.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-40f9a13a.e9f25adf.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-414d3086.0133c605.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-41c946b0.739b82c8.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-428acb30.a6dc2835.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4290e922.f3336c29.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4630a80c.8ad42403.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-47228a70.c33f4f3f.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-479610aa.8e2ef6c1.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-48f02545.351d62dd.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-493a457b.5dbc2a5a.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-497f7faa.3d95ed9e.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4a67e67a.b77e87b8.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4bba72e2.6505021d.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4d60b3d3.29eb9292.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4d6e0ceb.ac41878e.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4db8c2d2.0cab9019.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4e139a71.71adabe3.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-4eb9e66c.eb73d732.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-542e087e.47d00b71.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-5974e72a.5e44303a.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-5c96b416.f19967c5.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-5dba5ae9.06f7a677.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-5e133ad8.a057f36d.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-5e3ad2d9.2dfdba6f.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-5f1c0a6a.0468bc9b.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-5f22ebe5.c5e2c846.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-624cfce8.326861f6.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-63cd0d5e.81649323.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-674abaf8.29545097.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-6a68d65c.43e09e16.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-6bd8f398.be0d6ece.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-6be7ed05.20f20edd.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-6f386506.4505d71c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-6fdaa938.8b6da804.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-707aaaa4.0c202365.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-74393407.ff068c19.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-77cb6dbf.0d54f3b4.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-7930a2be.e82ecb7d.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-79627316.9fb4827b.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-79937ef9.08d222bf.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-7c9bd2c2.bf2ad2fb.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-7ee18d7c.8e45cf6a.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-7f4a38c8.f128a6ce.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-7fadacdb.8c823264.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-8ec1c4b8.75f14917.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-98325c04.0919f4b6.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-9c2c1272.0735beba.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-a5fddfc0.fd79ad7c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-acd79cca.b73747ce.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-b4692ec2.ba63c3d7.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-b4c12bc4.71b068ae.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-b75b4622.75ebf655.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-c1d65660.1bde2e02.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-c2e2e254.203f746e.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-c46c1482.08ba2b72.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-c5633324.549dff1c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-c59fdf84.eeaffdd6.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-ca4b57e4.8b3f087e.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-d072fd9a.b3864338.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-d20d8548.dce36d07.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-d2a0828c.b5d40b85.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-d3da1670.e2df0ae4.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-dd4e589c.26a7ee72.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-dd944c74.22dfc2ba.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-e6551aba.455638ba.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-f0fdef00.26cf3df2.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/chunk-f4d58aac.1b577913.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/depositRedirect.routes.73bfbfb3.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/notifications.routes.d152fad5.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/products.routes.6c6246e0.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/resetPassword.routes.ccd58f4a.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/transactions.routes.9592f42c.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/verifyregistrationemail.routes.4bf59011.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/css/wallet.routes.ff2767da.css" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/Bitcoin.routes.eb473ba1.js"" rel=prefetch>
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/ConfirmReg.routes.2ff7fdfa.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/ForgotPassword.routes.c685a271.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/Giftcards.routes.ae50e252.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/Home.routes.326b9649.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/Login.routes.81892e45.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/Paypal.routes.aa197047.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/PerfectMoney.routes.67d5ff0e.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/Rates.routes.037cf076.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/RegisterBank.routes.ad433bf0.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/RegisterEmail.routes.cbb360c3.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/RegisterName.routes.d3929081.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/RegisterPassword.routes.3d9b676a.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/RegisterPhone.routes.660185d2.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/RegisterPhone.routes~VerifyPhone.routes.63ddb43c.js" rel=prefetch>
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/Settings.routes.7b3cf61c.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/TradeGiftcards.routes.54a35fb9.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/TradeGiftcards.routes~VerifyPhone.routes.6c64a8ea.js" rel=prefetch>
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/VerifyPhone.routes.e4d5b499.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/authverify2faCode.routes.27ddfcf7.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-02bc0153.76e40924.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-04124880.82df30b5.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-044dff20.52d748ed.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-060b5254.394b3e61.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-071f5770.68313b7a.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-09248ac6.94c11ff1.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-0a20cdb4.374f7979.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-0a9e7790.627e2832.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-0c14e09e.2d00669f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-0c8eba2c.e04eb403.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-0d256c58.b7f51145.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-0e11cead.fde5a138.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-0eb5f8a8.8e0277fc.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-10d24c19.2a05f0fa.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-11e19c3e.2e34fb6e.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-11f8755c.d6cda2ee.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-145cffda.bfc13de8.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-16610e90.e40fb553.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-192d7b8a.cbcf0248.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-1a392542.1e315f89.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-1a6e77ea.f34b361f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-1acf966e.e3b30e96.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-1e37823c.d23c9b9f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-203a3a0b.be3b7af0.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-214e19fa.cd0c60f4.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-23da21cd.b5f8883a.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-28cbbf04.2b124e5a.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-29e08a5f.89c31407.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2a2efa78.a805005c.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2be07dcf.3b28fb36.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2c55d9ca.e457a2da.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d0ac39a.c08b6ec0.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d0be0ee.6b9a3086.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d0be333.a4aacdff.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d0c26c7.f2dc9d20.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d0d6943.1689164d.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d2086aa.984128e7.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d208897.3f1c681b.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d217741.8fb5bd2b.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d21840d.4ed018aa.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2d894bf7.07164584.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2e486dbd.eff4c1eb.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-2fff909d.6a8e3db8.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-31b53a88.80973c16.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-3328850e.2ec82b65.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-35d3ed74.6a0baefb.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-39915385.1da3ff04.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-39ad6f7b.af0cba8c.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-3b7d8378.84e86104.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-3c61f533.e826f0a2.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-3cb47ed4.1f23bd14.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-3da47f7c.a4abbcff.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-3e93e729.9dcdd6e2.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-3fed10be.89b28b34.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-40044576.5e5ec6a9.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-40f9a13a.ce95fc9b.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-414d3086.8ab79830.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-41c946b0.55e8e929.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-428acb30.e7e4f5c1.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4290e922.7dffbfc2.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4630a80c.34ef3d94.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-47228a70.99d25581.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-479610aa.50b52dc9.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-48f02545.826b1a44.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-493a457b.01cca826.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-497f7faa.52e2e658.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4a67e67a.3f0c73a6.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4bba72e2.8c7f2ab8.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4d60b3d3.3b5507cf.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4d6e0ceb.f685fb1d.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4db8c2d2.f3068bd2.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4e139a71.431f0447.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-4eb9e66c.05eacb0e.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-542e087e.09d07bfe.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-5974e72a.2bbe4002.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-5c96b416.f2806a7f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-5dba5ae9.11c370f4.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-5e133ad8.758fe316.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-5e3ad2d9.711f1f0b.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-5f1c0a6a.ee9f2ef4.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-5f22ebe5.3d2fcbb5.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-624cfce8.4369a40d.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-63cd0d5e.85155b3d.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-65734950.697fd198.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-674abaf8.99a61a3f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-682f90c4.6594a809.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-6a68d65c.2b69802c.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-6bd8f398.3b74a85f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-6be7ed05.6315ae6c.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-6f386506.ff594758.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-6fdaa938.00ce17a8.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-707aaaa4.d95ce7cc.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-74393407.04fe32c6.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-77359b76.ded11239.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-77cb6dbf.e61987c0.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-790dbb6c.4b0437d9.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-7930a2be.1e380520.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-79627316.a8b41042.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-79937ef9.3aa60af5.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-7c9bd2c2.d3472021.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-7d576434.e9349a72.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-7ee18d7c.06724a5b.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-7f4a38c8.1db412ef.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-7fadacdb.8f83280d.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-8ec1c4b8.a034ad58.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-98325c04.7e9bbb52.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-9c2c1272.11a4866f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-a5fddfc0.6c0d5726.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-acd79cca.cd763a19.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-b4692ec2.3dd89cbd.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-b4c12bc4.3cf2cf88.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-b75b4622.7cd2dfbb.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-bb33fb6e.75fcfb08.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-c1d65660.dd07024e.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-c2e2e254.c1eb6562.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-c46c1482.3623edf4.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-c5633324.a9412624.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-c59fdf84.6640f663.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-ca4b57e4.86c5310f.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-d072fd9a.4c860e6d.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-d20d8548.66745a13.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-d2a0828c.fbdfca89.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-d3da1670.b5af03a1.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-d4b7b9fa.0f6e8ee2.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-dd4e589c.fc56bd7b.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-dd944c74.208074b8.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-e6551aba.5488f3b7.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-f0fdef00.a4753cf4.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/chunk-f4d58aac.f607bdda.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/depositRedirect.routes.f4814ba4.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/notifications.routes.60292dc4.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/products.routes.6c43cadd.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/resetPassword.routes.eddb6453.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/transactions.routes.ad1236ff.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/vendors~Giftcards.routes.6bf28c01.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/vendors~Home.routes.98cef7c2.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/vendors~RegisterBank.routes~RegisterEmail.routes.da08caf6.js" rel=prefetch>
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/vendors~VerifyPhone.routes~verifyregistrationemail.routes.53a9e127.js" rel=prefetch>
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/vendors~wallet.routes.c92e45e6.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/verifyregistrationemail.routes.84cb556a.js" rel=prefetch>
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/wallet.routes.26f94464.js" rel="stylesheet">
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/app.b3c01730.js" rel=preload as=script>
	<link href="<?php bloginfo("template_directory")?>/assets/login/js/vendors~app.32d1dbbc.js" rel=preload as=script>
</head>

<body><noscript><strong>We're sorry but patricia-new-web doesn't work properly without JavaScript enabled. Please enable
			it to continue.</strong></noscript>
	<div data-v-3394a188="" id="app">
		<div data-v-3394a188="" class="page-container loader-normal">
			<!---->
			<div data-v-3394a188="" class="slideout-panel clearfix">
				<!---->
				<div class="slideout-wrapper"></div>
			</div>
			<!---->
			<div data-v-3019ecc3="" data-v-3394a188="" class="container-fluid">
				<div data-v-3019ecc3="" class="row">
					<div data-v-3019ecc3="" class="col-md-6 image-con visible-md visible-lg text-white"><img data-v-3019ecc3=""
							src="https://storage.googleapis.com/patricia-website-assets/signup_page_image.svg" alt=""
							class="img-responsive">
						<div data-v-3019ecc3="" class="image-con-text text-primary">
							<h1 data-v-3019ecc3="">We are simply <b data-v-3019ecc3="">BUILT</b> for you</h1>
						</div>
					</div>
					<div data-v-3019ecc3="" class="col-md-6 row text-center">
						<div data-v-3019ecc3=""
							class="auth text-center col-xs-12 col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2">
							<div data-v-3019ecc3="" class="row">
								<div data-v-3019ecc3="" class="col-xs-10 col-xs-offset-1">
									<h1 data-v-3019ecc3="" class="text-primary text-bold">Welcome!</h1>
									<p data-v-3019ecc3="" class="text-grey2">
										Let's get to know you
									</p>
									<div data-v-3019ecc3="" class="row">
										<div data-v-3019ecc3="" class="col-md-12 col-xs-12 col-sm-12 mt-20">
											<div data-v-d2815eda="" data-v-3019ecc3="" class="form-sm inner-addon left-addon" value=""><img
													data-v-d2815eda="" src="<?php bloginfo("template_directory")?>/assets/login/img/username.ae1d50b3.svg" class="glyphicon"><input
													data-v-d2815eda="" type="text" placeholder="Username" required="required"
													class="form-control"><span data-v-d2815eda=""><img data-v-d2815eda=""
														src="<?php bloginfo("template_directory")?>/assets/login/img/static-checker.0654d8e6.svg" width="30" alt="" class="p-5"></span></div>
											<p data-v-3019ecc3="" class="text-danger mb-0 mt-5 text-left" style="display: none;">
												Username is unavailable
											</p>
										</div><br data-v-3019ecc3="">
										<div data-v-3019ecc3="" class="col-md-12 col-xs-12 col-sm-12  mt-20">
											<div data-v-d2815eda="" data-v-3019ecc3="" class="form-sm inner-addon left-addon" value=""><img
													data-v-d2815eda="" src="<?php bloginfo("template_directory")?>/assets/login/img/email.c8cb4009.svg" class="glyphicon"><input data-v-d2815eda=""
													type="email" placeholder="E-mail" required="required" class="form-control"><span
													data-v-d2815eda=""><img data-v-d2815eda="" src="<?php bloginfo("template_directory")?>/assets/login/img/static-checker.0654d8e6.svg" width="30"
														alt="" class="p-5"></span></div>
											<p data-v-3019ecc3="" class="text-danger mb-0 mt-5 text-left" style="display: none;">
												E-mail is unavailable
											</p>
										</div>
										<div data-v-3019ecc3="" class="col-md-12 col-xs-12 col-sm-12  mt-20">
											<div data-v-d2815eda="" data-v-3019ecc3="" class="form-sm inner-addon left-addon" value=""><img
													data-v-d2815eda="" src="<?php bloginfo("template_directory")?>/assets/login/img/email.c8cb4009.svg" class="glyphicon"><input data-v-d2815eda=""
													type="email" placeholder="Confirm E-mail" required="required" class="form-control"><span
													data-v-d2815eda=""><img data-v-d2815eda="" src="<?php bloginfo("template_directory")?>/assets/login/img/static-checker.0654d8e6.svg" width="30"
														alt="" class="p-5"></span></div>
											<p data-v-3019ecc3="" class="text-danger mb-0 mt-5 text-left" style="display: none;">
												Emails do not match
											</p>
										</div>
										<div data-v-3019ecc3="" class="col-md-12 col-xs-12 col-sm-12 mt-20 ">
											<div data-v-d2815eda="" data-v-3019ecc3="" class="form-sm inner-addon left-addon" value=""><img
													data-v-d2815eda="" src="<?php bloginfo("template_directory")?>/assets/login/img/password.3d6f168f.svg" class="glyphicon"><input
													data-v-d2815eda="" type="password" placeholder="Choose Password" required="required"
													class="form-control"><span data-v-d2815eda=""><img data-v-d2815eda=""
														src="<?php bloginfo("template_directory")?>/assets/login/img/static-checker.0654d8e6.svg" width="30" alt="" class="p-5"></span></div>
											<div data-v-3019ecc3="" class="passwordText">
												<!---->
											</div>
											<p data-v-3019ecc3="" class="text-danger mb-0 mt-5 text-left" style="display: none;">
												Password must be more than 8 characters
											</p>
										</div><br data-v-3019ecc3="">
										<div data-v-3019ecc3="" class="col-md-12 col-xs-12  col-sm-12 mt-20">
											<div data-v-d2815eda="" data-v-3019ecc3="" class="form-sm inner-addon left-addon" value=""><img
													data-v-d2815eda="" src="<?php bloginfo("template_directory")?>/assets/login/img/password.3d6f168f.svg" class="glyphicon"><input
													data-v-d2815eda="" type="password" placeholder="Confirm Password" required="required"
													class="form-control"><span data-v-d2815eda=""><img data-v-d2815eda=""
														src="<?php bloginfo("template_directory")?>/assets/login/img/static-checker.0654d8e6.svg" width="30" alt="" class="p-5"></span></div>
											<p data-v-3019ecc3="" class="text-danger mb-0 mt-5 text-left" style="display: none;">
												Passwords do not match
											</p>
										</div>
									</div>
									<div data-v-3019ecc3="" class="terms">
										By clicking the butons below, you agree to Patricia’s <a data-v-3019ecc3="">terms and service</a>
									</div><br data-v-3019ecc3="">
									<div data-v-2474a4b0="" data-v-3019ecc3=""><button data-v-2474a4b0="" type="sumbit"
											disabled="disabled" class="btn btn-primary w-100 mt-20" style="height: 42px;"><i
												data-v-2474a4b0="" style="display: none;"></i> Signup
										</button></div><br data-v-3019ecc3="">
									<p data-v-3019ecc3="">
										Already have an account ?
										<a data-v-3019ecc3="" href="<?php echo $root ?>/login" class="text-primary text-bold">Click here </a></p>
								</div>
							</div>
						</div><br data-v-3019ecc3="">
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
	function initFreshChat() {
		window.fcWidget.init({
			token: "2c70f595-82cf-406f-b073-a62468ec3bf5",
			host: "https://wchat.freshchat.com"
		});
		// Copy the below lines under window.fcWidget.init inside initFreshChat function in the above snippet

		// To set unique user id in your system when it is available
		window.fcWidget.setExternalId(localStorage.getItem("userid"));

		// To set user name
		window.fcWidget.user.setFirstName(localStorage.getItem("firstname"));

		// To set user email
		window.fcWidget.user.setEmail(localStorage.getItem("email"));

		// To set user properties
		window.fcWidget.user.setProperties({
			plan: "Estate", // meta property 1
			status: "Active" // meta property 2
		});
	}

	function initialize(i, t) {
		var e;
		i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src =
			"https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
	}

	function initiateCall() {
		initialize(document, "freshchat-js-sdk")
	}
	window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall,
		!1);
	</script>
	<script src=/js/vendors~app.32d1dbbc.js></script>
	<script src=/js/app.b3c01730.js></script>
</body>
<script src=https://stackpath.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js></script>
<script src=https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js></script>
<script src=vue-qrcode-reader.browser.js></script>
<script>
! function() {
	var analytics = window.analytics = window.analytics || [];
	if (!analytics.initialize)
		if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
		else {
			analytics.invoked = !0;
			analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset",
				"group", "track", "ready", "alias", "debug", "page", "once", "off", "on"
			];
			analytics.factory = function(t) {
				return function() {
					var e = Array.prototype.slice.call(arguments);
					e.unshift(t);
					analytics.push(e);
					return analytics
				}
			};
			for (var t = 0; t < analytics.methods.length; t++) {
				var e = analytics.methods[t];
				analytics[e] = analytics.factory(e)
			}
			analytics.load = function(t, e) {
				var n = document.createElement("script");
				n.type = "text/javascript";
				n.async = !0;
				n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
				var a = document.getElementsByTagName("script")[0];
				a.parentNode.insertBefore(n, a);
				analytics._loadOptions = e
			};
			analytics.SNIPPET_VERSION = "4.1.0";
			analytics.load("MfXVDtRu24qY4Lt2pkFPHg2zBSefDkBu");
			analytics.page();
		}
}();
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-139892537-1"></script>
<script>
window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-139892537-1');
</script>
<script>
! function(f, e, t, u, n, s, p) {
	if (f.esk) return;
	n = f.esk = function() {
		n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
	};
	if (!f.___esk) f.___esk = n;
	n.push = n;
	n.loaded = !0;
	n.queue = [];
	s = e.createElement(t);
	s.async = !0;
	s.src = u;
	p = e.getElementsByTagName(t)[0];
	p.parentNode.insertBefore(s, p)
}(window, document, 'script', 'https://dsp-media.eskimi.com/gtr.min.js');
esk('init', '11230');
esk('aid', '72402');
</script>

</html>
