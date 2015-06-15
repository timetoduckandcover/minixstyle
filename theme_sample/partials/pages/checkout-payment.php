

<div class="header-push less">
	<div id="checkout-payment">
		<div class="wrapper padding">
			<?php include('partials/pages/page-partials/breadcrumbs-checkout.php');?>
			<div class="row mb">
				<div class="col-xs-12 mb">
					<h1 class="gamma">Checkout</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-md-7">
					<div class="payment-details">
						<h2 class="epsilon">Payment Details</h2>
						<div class="payment-type">
							<ul>
								<li class="card-labels">
									<input type="radio" name="payment-type" id="payment-type-card" checked="checked" />
									<label for="payment-type-card" class="name">Credit Card</label>
									<div class="card-inputs">
										<input type="text" maxlength="4" />
										<input type="text" maxlength="4" />
										<input type="text" maxlength="4" />
										<input type="text" maxlength="4" />
									</div>
								</li>
								<li class="card-labels">
									<input type="radio" name="payment-type" id="payment-type-paypal" />
									<label for="payment-type-paypal" class="name">Paypal</label>
									<div class="card-inputs">
										<input type="text" maxlength="4" />
										<input type="text" maxlength="4" />
										<input type="text" maxlength="4" />
										<input type="text" maxlength="4" />
									</div>
								</li>
								<li>
									<div class="styled-select">
										<select name="" id="">
											<option value="" disabled selected>New Billing Profile</option>
										</select>
									</div>
								</li>
								<li>
									<label for="">Card Number:</label>
									<input type="text" placeholder="Card Number" />
								</li>
								<li>
									<label for="">Expiry Date:</label>
									<div class="expiry-holder">
										<div class="styled-select">
											<select name="" id="">
												<option value="" disabled selected>Month</option>
												<option value="January">January</option>
												<option value="February">February</option>
												<option value="March">March</option>
												<option value="April">April</option>
												<option value="May">May</option>
												<option value="June">June</option>
												<option value="July">July</option>
												<option value="August">August</option>
												<option value="September">September</option>
												<option value="October">October</option>
												<option value="November">November</option>
												<option value="December">December</option>
											</select>
										</div>
									</div>
									<div class="expiry-holder">
										<input type="text" placeholder="Card Number" />
									</div>
									<div class="expiry-holder">
										<input type="text" placeholder="Card Number" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-md-5">
					<?php include('partials/pages/page-partials/checkout-order-summary.php');?>
				</div>
			</div>
		</div>
	</div>
</div>
