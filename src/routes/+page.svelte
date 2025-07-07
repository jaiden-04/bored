<script lang="ts">	
    let { data } = $props();
	let MemberCount = data.users?.length;
</script>


<svelte:head>
	<title>SillyBB - Home</title>
</svelte:head>

<div class="container" style="background-color: #f0f0f0;">
	<!-- Header -->
	<div class="header">
		<h1>SillyBB</h1>
		<p>Yeah idk some random forum i guess</p>
	</div>

	<!-- Navigation -->
	<div class="navigation">
		<a href="/home">Home</a>
		<a href="/search">Search</a>
		<a href="/members">Members</a>
		<a href="/help">Help</a>
		<a href="/admin">Admin</a>
	</div>

	<!-- Announcement -->
	<div class="announcement" id="sitenotice">
		<content id="sitenotice-content"></content>
	</div>

	<!-- Login Form -->
	<div class="login-form">
		<strong>Quick Login:</strong>
		<input type="text" placeholder="Username"/>
		<input type="password" placeholder="Password"/>
		<button>Login</button>
		<button>Register</button>
	</div>

	<!-- Stats Bar -->
	<div class="stats-bar">
		<strong>Forum Stats:</strong> <strong>{MemberCount}</strong> Members | <strong>[]</strong> Posts | <strong>[]</strong> Topics | <strong>[]</strong> Online Now
	</div>

	<!-- Main Forum Table -->
	<table class="forum-table">
		<thead>
			<tr>
				<th>📁</th>
				<th>Forum</th>
				<th>Topics</th>
				<th>Posts</th>
				<th>Last Post</th>
			</tr>
		</thead>
		<tbody>
			<tr class="sticky-post">
				<td class="forum-icon">📌</td>
				<td class="forum-name">
					<a href="#announcements">Announcements</a>
					<br /><span class="forum-description">Official site news and updates</span>
				</td>
				<td class="forum-stats">15</td>
				<td class="forum-stats">89</td>
				<td class="forum-lastpost">
					<strong>Admin</strong><br />
					Today, 14:32
				</td>
			</tr>
			<tr>
				<td class="forum-icon">💬</td>
				<td class="forum-name">
					<a href="#general">General Discussion</a>
					<br /><span class="forum-description">Talk about anything and everything</span>
				</td>
				<td class="forum-stats">1,234</td>
				<td class="forum-stats">15,678</td>
				<td class="forum-lastpost">
					<strong>RetroUser99</strong><br />
					Today, 16:45
				</td>
			</tr>
			<tr>
				<td class="forum-icon">💻</td>
				<td class="forum-name">
					<a href="#tech">Technology</a>
					<br /><span class="forum-description">Hardware, software, and tech support</span>
				</td>
				<td class="forum-stats">456</td>
				<td class="forum-stats">8,901</td>
				<td class="forum-lastpost">
					<strong>TechWiz</strong><br />
					Today, 15:20
				</td>
			</tr>
			<tr>
				<td class="forum-icon">🎮</td>
				<td class="forum-name">
					<a href="#gaming">Gaming</a>
					<br /><span class="forum-description">Video games, reviews, and discussions</span>
				</td>
				<td class="forum-stats">789</td>
				<td class="forum-stats">12,345</td>
				<td class="forum-lastpost">
					<strong>GameMaster</strong><br />
					Today, 13:15
				</td>
			</tr>
			<tr>
				<td class="forum-icon">🎵</td>
				<td class="forum-name">
					<a href="#music">Music & Entertainment</a>
					<br /><span class="forum-description">Share your favorite tunes and shows</span>
				</td>
				<td class="forum-stats">234</td>
				<td class="forum-stats">3,456</td>
				<td class="forum-lastpost">
					<strong>MusicLover</strong><br />
					Yesterday, 22:30
				</td>
			</tr>
			<tr>
				<td class="forum-icon">🔧</td>
				<td class="forum-name">
					<a href="#support">Technical Support</a>
					<br /><span class="forum-description">Get help with forum issues</span>
				</td>
				<td class="forum-stats">67</td>
				<td class="forum-stats">234</td>
				<td class="forum-lastpost">
					<strong>SupportGuru</strong><br />
					Yesterday, 18:45
				</td>
			</tr>
			<tr>
				<td class="forum-icon">🗑️</td>
				<td class="forum-name">
					<a href="#offtopic">Off-Topic</a>
					<br /><span class="forum-description">Random discussions and spam</span>
				</td>
				<td class="forum-stats">2,345</td>
				<td class="forum-stats">25,678</td>
				<td class="forum-lastpost">
					<strong>RandomUser</strong><br />
					Today, 16:58
				</td>
			</tr>
		</tbody>
	</table>

	<!-- Online Users -->
	<div class="online-users">
		<h3>👥 Currently Online Users (13):</h3>
		<div class="user-list">
			<a href="#user">Admin</a>
			<a href="#user">RetroUser99</a>
			<a href="#user">TechWiz</a>
			<a href="#user">GameMaster</a>
			<a href="#user">MusicLover</a>
			<a href="#user">NewbiePoster</a>
			<a href="#user">OldTimer</a>
			<a href="#user">ForumLurker</a>
			<a href="#user">CodeWarrior</a>
			<a href="#user">PixelArtist</a>
			<a href="#user">RetroGamer</a>
			<a href="#user">ChatMaster</a>
			<a href="#user">DialupUser</a>
		</div>
	</div>

	<!-- Footer -->
	<div class="footer">
		<p class = blink>Powered by SillyBB</p>
		<a href="https://github.com/jaiden-04/bored">View GitHub Repository</a>
		<p><a href="mailto:admin@sillybb.net" style="color: #ffffff;">Contact Admin</a></p>
	</div>
</div>

<style>
	/* Global CSS */
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'Courier New', monospace;
		background-color: #f0f0f0;
		color: #333;
		line-height: 1.4;
		font-size: 12px;
	}

	a {
		color: #0000ee;
		text-decoration: underline;
	}

	a:visited {
		color: #551a8b;
	}

	a:hover {
		background-color: #ffff00;
	}

	table {
		border-collapse: collapse;
		width: 100%;
		background-color: #ffffff;
		border: 2px solid #000000;
	}

	th,
	td {
		border: 1px solid #cccccc;
		padding: 4px 8px;
		text-align: left;
	}

	th {
		background-color: #dddddd;
		font-weight: bold;
	}

	tr:nth-child(even) {
		background-color: #f9f9f9;
	}

	tr:hover {
		background-color: #e6e6e6;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 10px;
	}

	/* Page Specific CSS */
	.header {
		background-color: #000080;
		color: #ffffff;
		padding: 15px;
		text-align: center;
		border: 3px solid #000000;
		margin-bottom: 20px;
	}

	.header h1 {
		font-size: 24px;
		font-weight: bold;
		text-shadow: 2px 2px 0px #000000;
	}

	.header p {
		font-size: 14px;
		margin-top: 5px;
	}

	.navigation {
		background-color: #c0c0c0;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
	}

	.navigation a {
		margin-right: 20px;
		font-weight: bold;
		text-decoration: none;
		color: #000000;
		padding: 2px 4px;
		border: 1px solid #808080;
		background-color: #e0e0e0;
	}

	.navigation a:hover {
		background-color: #ffffff;
		border: 1px solid #000000;
	}

	.stats-bar {
		background-color: #ffff99;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
		text-align: center;
	}

	.forum-table {
		margin-bottom: 20px;
	}

	.forum-table th {
		background-color: #4169e1;
		color: #ffffff;
		font-weight: bold;
	}

	.forum-icon {
		text-align: center;
		width: 30px;
	}

	.forum-name {
		font-weight: bold;
		width: 40%;
	}

	.forum-description {
		font-style: italic;
		color: #666666;
		font-size: 11px;
	}

	.forum-stats {
		text-align: center;
		width: 80px;
		font-size: 11px;
	}

	.forum-lastpost {
		width: 150px;
		font-size: 11px;
	}

	.online-users {
		background-color: #90ee90;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
	}

	.online-users h3 {
		margin-bottom: 10px;
		font-size: 14px;
	}

	.user-list {
		font-size: 11px;
	}

	.user-list a {
		margin-right: 10px;
	}

	.footer {
		background-color: #808080;
		color: #ffffff;
		text-align: center;
		padding: 15px;
		border: 2px solid #000000;
		margin-top: 20px;
	}

	.login-form {
		background-color: #ffd700;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
	}

	.login-form input {
		font-family: 'Courier New', monospace;
		font-size: 12px;
		padding: 2px;
		margin: 2px;
		border: 1px solid #000000;
	}

	.login-form button {
		font-family: 'Courier New', monospace;
		font-size: 12px;
		padding: 4px 8px;
		background-color: #e0e0e0;
		border: 2px solid #000000;
		cursor: pointer;
	}

	.login-form button:hover {
		background-color: #ffffff;
	}

	.sticky-post {
		background-color: #ffffcc;
	}

	.announcement {
		background-color: #ff6666;
		color: #ffffff;
		padding: 10px;
		border: 2px solid #000000;
		margin-bottom: 20px;
		text-align: center;
	}

	.blink {
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}
</style>
