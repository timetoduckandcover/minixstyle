

<div class="header-push less">
	<div id="checkout-shipping">
		<div class="wrapper padding">
			<?php include('partials/pages/page-partials/breadcrumbs-checkout.php');?>
			<div class="row mb">
				<div class="col-xs-12 mb">
					<h1 class="gamma">Checkout</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-md-7">
					<div class="shipping-details">
						<h2 class="epsilon">Shipping Details</h2>
						<div class="checkout-current-address">
							<div class="styled-select">
								<select name="" id="">
									<option value="">Mini X</option>
								</select>
							</div>
							<a href="javascript:;" class="underline upper" id="add-new-address">Add a new shipping address</a>
						</div>
						<div class="checkout-new-address">
							<form action="">
								<ul class="row">
									<li class="col-xs-12">
										<input type="submit" value="Add new address" class="add-new-address-btn"/>
									</li>
									<li class="col-xs-12">
										<input type="text" placeholder="Name" />
									</li>
									<li class="col-xs-12">
										<input type="text" placeholder="Address" />
									</li>
									<li class="col-xs-12">
										<input type="text" placeholder="Apt, Suite, etc (optional)" />
									</li>
									<li class="col-xs-12">
										<input type="text" placeholder="City" />
									</li>
									<li class="col-xs-12">
										<div class="styled-select">
											<select name="" id="">
												<option value="" disabled selected>Country</option>
												<option value="United States">United States</option>
											</select>
										</div>
									</li>
									<li class="col-xs-12 col-sm-6">
										<div class="styled-select">
											<select name="" id="">
												<option value="" disabled selected>State</option>
												<option value="California">California</option>
											</select>
										</div>
									</li>
									<li class="col-xs-12 col-sm-6">
										<input type="text" placeholder="Zip Code" />
									</li>
									<li class="col-xs-12">
										<input type="number" placeholder="Phone Number" />
									</li>
									<li class="col-xs-12">
										<a href="javascript:;" class="underline upper cancel-add-new-address">Cancel</a>
									</li>
								</ul>
							</form>
						</div>
					</div>
					<div class="shipping-gift">
						<div class="shipping-gift-false">
							<h2 class="epsilon">Make this order a gift</h2>
							<a href="javascript:;" class="underline upper add-gift-card-btn">Add gift card</a>
						</div>
						<div class="shipping-gift-true">
							<h2 class="epsilon">Gift Card Added</h2>
							<ul>
								<li>
									<span class="title">To:</span>
									<span>Name</span>
								</li>
								<li>
									<span class="title">From:</span>
									<span>Name</span>
								</li>
								<li>
									<span class="title">Message:</span>
									<span class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia convallis rutrum.
										Sed placerat magna eu nisi vulputate, eget vulputate ligula mattis. Quisque cursus, risus id vehicula fringilla, dolor sapien viverra turpis, in rutrum sapien arcu quis turpis. Suspendisse auctor vel metus
										non malesuada. Aenean sodales lacus eu arcu tempus dictum. Aenean sed iaculis mauris. Nulla ut odio interdum, placerat erat sit amet, blandit lacus. Praesent viverra magna leo, sed rutrum leo dictum eget. Cras aliquet diam id velit dictum lobortis. Nunc a auctor lectus, id semper magna. Etiam auctor pellentellis.
									</span>
								</li>
								<li>
									<a href="javascript:;" class="upper underline edit-gift-card">Edit</a>
									<a href="javascript:;" class="upper underline remove-gift-card">Remove</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="shipping-options">
						<h2 class="epsilon">Shipping options</h2>
						<ul>
							<li>
								<input type="radio" checked="checked" id="shipping-options-1" name="shipping-options" />
								<label for="shipping-options-1">FREE SHIPPING - $0.00 - expected delivery 5-7 business days</label>
							</li>
							<li>
								<input type="radio" id="shipping-options-2" name="shipping-options" />
								<label for="shipping-options-2">STANDARD SHIPPING - $5.00 - expected delivery 5-7 business days</label>
							</li>
							<li>
								<input type="radio" id="shipping-options-3" name="shipping-options" />
								<label for="shipping-options-3">EXPRESS SHIPPING - $20.00 - expected delivery 2-3 business days</label>
							</li>
						</ul>
					</div>
					<div class="continue-to-payment">
						<a href="checkout-payment.php" class="btn">Continue to payment</a>
					</div>
				</div>
				<div class="col-xs-12 col-md-5">
					<?php include('partials/pages/page-partials/checkout-order-summary.php');?>
				</div>
			</div>
		</div>
	</div>
</div>

<?php include('partials/pages/page-partials/gift-card-overlay.php');?>