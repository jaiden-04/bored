<script lang="ts">
	import { onMount } from 'svelte';

	let username = '';
	let password = '';
	let data;
	let error;
	let clickCount = 0;
	let backgroundColor = '#f0f0f0';

	async function loadData() {
		try {
			const res = await fetch('/api/sitenotice');
			if (!res.ok) throw new Error(await res.text());
			
			let sitenotice = document.getElementById('sitenotice');
			let sitenoticeContent = document.getElementById('sitenotice-content');
			
			let text = await res.text();

			if (text !== '') {
				sitenoticeContent!.innerHTML = text;
			} else {
				sitenotice!.remove();
			}

		} catch (err) {
			error = err instanceof Error ? err.message : 'An unknown error occurred';
			console.log("Error loading data:", error);
		}
	}

	loadData();

	function login() {
		if (username && password) {
			alert('Login functionality would be implemented here.\nUsername: ' + username);
		} else {
			alert('Please enter both username and password.');
		}
	}

	function register() {
		alert('Registration page would open here.');
	}

	function handleForumClick(e: Event) {
		e.preventDefault();
		clickCount++;
		console.log(`Forum link clicked! Total clicks: ${clickCount}`);

		const messages = [
			'Loading forum...',
			'Connecting to server...',
			'Retrieving posts...',
			'Forum temporarily unavailable',
			'This feature is under construction'
		];

		const randomMessage = messages[Math.floor(Math.random() * messages.length)];
		alert(randomMessage);
	}

	onMount(() => {
		const interval = setInterval(() => {
			const colors = ['#f0f0f0', '#f5f5f5', '#e8e8e8', '#f0f8ff'];
			backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		}, 30000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>SillyBB - Classic Discussion Board</title>
</svelte:head>

<div class="container" style="background-color: {backgroundColor};">
	<!-- Header -->
	<div class="header">
		<h1>SillyBB</h1>
		<p>Forum software that has a fake retro look :P</p>
	</div>

	<!-- Navigation -->
	<div class="navigation">
		<a href="#home" on:click={handleForumClick}>Home</a>
		<a href="#search" on:click={handleForumClick}>Search</a>
		<a href="#members" on:click={handleForumClick}>Members</a>
		<a href="#help" on:click={handleForumClick}>Help</a>
		<a href="#admin" on:click={handleForumClick}>Admin</a>
	</div>

	<!-- Announcement -->
	<div class="announcement" id="sitenotice">
		<content id="sitenotice-content"></content>
	</div>

	<!-- Login Form -->
	<div class="login-form">
		<strong>Quick Login:</strong>
		<input type="text" placeholder="Username" bind:value={username} />
		<input type="password" placeholder="Password" bind:value={password} />
		<button on:click={login}>Login</button>
		<button on:click={register}>Register</button>
	</div>

	<!-- Stats Bar -->
	<div class="stats-bar">
		<strong>Forum Stats:</strong> 1,337 Members | 42,069 Posts | 3,141 Topics | 13 Online Now
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
					<a href="#announcements" on:click={handleForumClick}>Announcements</a>
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
					<a href="#general" on:click={handleForumClick}>General Discussion</a>
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
					<a href="#tech" on:click={handleForumClick}>Technology</a>
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
					<a href="#gaming" on:click={handleForumClick}>Gaming</a>
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
					<a href="#music" on:click={handleForumClick}>Music & Entertainment</a>
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
					<a href="#support" on:click={handleForumClick}>Technical Support</a>
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
					<a href="#offtopic" on:click={handleForumClick}>Off-Topic</a>
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
			<a href="#user" on:click={handleForumClick}>Admin</a>
			<a href="#user" on:click={handleForumClick}>RetroUser99</a>
			<a href="#user" on:click={handleForumClick}>TechWiz</a>
			<a href="#user" on:click={handleForumClick}>GameMaster</a>
			<a href="#user" on:click={handleForumClick}>MusicLover</a>
			<a href="#user" on:click={handleForumClick}>NewbiePoster</a>
			<a href="#user" on:click={handleForumClick}>OldTimer</a>
			<a href="#user" on:click={handleForumClick}>ForumLurker</a>
			<a href="#user" on:click={handleForumClick}>CodeWarrior</a>
			<a href="#user" on:click={handleForumClick}>PixelArtist</a>
			<a href="#user" on:click={handleForumClick}>RetroGamer</a>
			<a href="#user" on:click={handleForumClick}>ChatMaster</a>
			<a href="#user" on:click={handleForumClick}>DialupUser</a>
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
