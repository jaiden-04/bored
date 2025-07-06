<header class="modern-header">
	<nav class="navbar">
		<div class="nav-container">
			<!-- Logo and Brand -->
			<div class="nav-brand">
				<a href="/" class="brand-link">
					<div class="brand-logo">
						<span class="logo-icon">🚀</span>
					</div>
					<div class="brand-text">
						<span class="brand-name">TechForum</span>
						<span class="brand-tagline">Connect & Learn</span>
					</div>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="nav-menu">
				<a href="/" class="nav-link active">
					<span class="nav-icon">🏠</span>
					<span>Home</span>
				</a>
				<a href="/categories" class="nav-link">
					<span class="nav-icon">📁</span>
					<span>Categories</span>
				</a>
				<a href="/topics" class="nav-link">
					<span class="nav-icon">💬</span>
					<span>Topics</span>
				</a>
				<a href="/members" class="nav-link">
					<span class="nav-icon">👥</span>
					<span>Members</span>
				</a>
				<a href="/search" class="nav-link">
					<span class="nav-icon">🔍</span>
					<span>Search</span>
				</a>
			</div>

			<!-- Search Bar -->
			<div class="nav-search">
				<div class="search-container">
					<input type="text" placeholder="Search topics, posts..." class="search-input" />
					<button class="search-button">
						<span class="search-icon">🔍</span>
					</button>
				</div>
			</div>

			<!-- User Actions -->
			<div class="nav-actions">
				<button class="action-button notifications">
					<span class="action-icon">🔔</span>
					<span class="notification-badge">3</span>
				</button>
				<button class="action-button messages">
					<span class="action-icon">💬</span>
					<span class="notification-badge">1</span>
				</button>
				<div class="user-menu">
					<button class="user-button">
						<img src="/images/avatars/current-user.jpg" alt="User Avatar" class="user-avatar" />
						<span class="user-name">John Doe</span>
						<span class="dropdown-arrow">▼</span>
					</button>
					<div class="user-dropdown">
						<a href="/profile" class="dropdown-item">
							<span class="dropdown-icon">👤</span>
							<span>Profile</span>
						</a>
						<a href="/settings" class="dropdown-item">
							<span class="dropdown-icon">⚙️</span>
							<span>Settings</span>
						</a>
						<a href="/bookmarks" class="dropdown-item">
							<span class="dropdown-icon">🔖</span>
							<span>Bookmarks</span>
						</a>
						<div class="dropdown-divider"></div>
						<a href="/logout" class="dropdown-item">
							<span class="dropdown-icon">🚪</span>
							<span>Sign Out</span>
						</a>
					</div>
				</div>
			</div>

			<!-- Mobile Menu Toggle -->
			<button class="mobile-menu-toggle">
				<span class="hamburger-line"></span>
				<span class="hamburger-line"></span>
				<span class="hamburger-line"></span>
			</button>
		</div>
	</nav>

	<!-- Mobile Menu -->
	<div class="mobile-menu">
		<div class="mobile-menu-content">
			<a href="/" class="mobile-nav-link active">
				<span class="nav-icon">🏠</span>
				<span>Home</span>
			</a>
			<a href="/categories" class="mobile-nav-link">
				<span class="nav-icon">📁</span>
				<span>Categories</span>
			</a>
			<a href="/topics" class="mobile-nav-link">
				<span class="nav-icon">💬</span>
				<span>Topics</span>
			</a>
			<a href="/members" class="mobile-nav-link">
				<span class="nav-icon">👥</span>
				<span>Members</span>
			</a>
			<a href="/search" class="mobile-nav-link">
				<span class="nav-icon">🔍</span>
				<span>Search</span>
			</a>
			<div class="mobile-menu-divider"></div>
			<a href="/profile" class="mobile-nav-link">
				<span class="nav-icon">👤</span>
				<span>Profile</span>
			</a>
			<a href="/settings" class="mobile-nav-link">
				<span class="nav-icon">⚙️</span>
				<span>Settings</span>
			</a>
			<a href="/logout" class="mobile-nav-link">
				<span class="nav-icon">🚪</span>
				<span>Sign Out</span>
			</a>
		</div>
	</div>
</header>

<main role="main">
	<slot />
</main>

<footer class="modern-footer">
	<div class="footer-container">
		<div class="footer-content">
			<div class="footer-section">
				<div class="footer-brand">
					<div class="footer-logo">
						<span class="logo-icon">🚀</span>
						<span class="brand-name">TechForum</span>
					</div>
					<p class="footer-description">
						Connect with developers worldwide. Share knowledge, learn new skills, and build amazing
						things together.
					</p>
					<div class="footer-social">
						<a href="#" class="social-link">📘</a>
						<a href="#" class="social-link">🐦</a>
						<a href="#" class="social-link">💼</a>
						<a href="#" class="social-link">📸</a>
					</div>
				</div>
			</div>

			<div class="footer-section">
				<h4 class="footer-title">Community</h4>
				<ul class="footer-links">
					<li><a href="/categories">Categories</a></li>
					<li><a href="/topics">Recent Topics</a></li>
					<li><a href="/members">Members</a></li>
					<li><a href="/leaderboard">Leaderboard</a></li>
				</ul>
			</div>

			<div class="footer-section">
				<h4 class="footer-title">Support</h4>
				<ul class="footer-links">
					<li><a href="/help">Help Center</a></li>
					<li><a href="/guidelines">Guidelines</a></li>
					<li><a href="/contact">Contact Us</a></li>
					<li><a href="/feedback">Feedback</a></li>
				</ul>
			</div>

			<div class="footer-section">
				<h4 class="footer-title">Legal</h4>
				<ul class="footer-links">
					<li><a href="/privacy">Privacy Policy</a></li>
					<li><a href="/terms">Terms of Service</a></li>
					<li><a href="/cookies">Cookie Policy</a></li>
					<li><a href="/dmca">DMCA</a></li>
				</ul>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="footer-bottom-content">
				<p class="footer-copyright">© 2025 TechForum. All rights reserved.</p>
				<div class="footer-bottom-links">
					<span class="footer-stats">15.2k members • 2.3k topics • 45.8k posts</span>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
    for details on configuring this project to bundle and minify static web assets. */

    a.navbar-brand {
		white-space: normal;
		text-align: center;
		word-break: break-all;
	}

	a {
		color: #0077cc;
	}

	.btn-primary {
		color: #fff;
		background-color: #1b6ec2;
		border-color: #1861ac;
	}

	.nav-pills .nav-link.active,
	.nav-pills .show > .nav-link {
		color: #fff;
		background-color: #1b6ec2;
		border-color: #1861ac;
	}

	.border-top {
		border-top: 1px solid #e5e5e5;
	}
	.border-bottom {
		border-bottom: 1px solid #e5e5e5;
	}

	.box-shadow {
		box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
	}

	button.accept-policy {
		font-size: 1rem;
		line-height: inherit;
	}

	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		white-space: nowrap;
		line-height: 60px;
	}
</style>
