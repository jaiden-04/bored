<script lang="ts">
    let { data } = $props();
	let MemberCount = data.users?.length;
</script>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SillyBB - Members</title>
</head>
<body>
<div class="container" style="background-color: #f0f0f0;">
	<div class="header">
		<h1>SillyBB</h1>
		<p>Yeah idk some random forum i guess</p>
	</div>

	<div class="navigation">
		<a href="/">Home</a>
		<a href="/search">Search</a>
		<a href="/members" style="background-color: #ffffff; border: 1px solid #000000;">Members</a>
		<a href="/help">Help</a>
		<a href="/admin">Admin</a>
	</div>

    <div class="stats-bar">
		<strong>Member Stats:</strong> <strong>{MemberCount}</strong> Total Members | <strong>[]</strong> Online Now | <strong>[]</strong> New This Month | <strong>[]</strong> Active This Week
	</div>

	<div class="search-form">
		<strong>Search Members:</strong>
		<input type="text" id="memberSearch" placeholder="Enter username or part of username..." style="width: 250px;">
		<button>Search</button>
		<button>Clear</button>
	</div>

	<div class="sort-options">
		<strong>Sort by:</strong>
		<select id="sortSelect">
			<option value="username">Username (A-Z)</option>
			<option value="joindate">Join Date (Newest)</option>
			<option value="posts">Post Count (Highest)</option>
			<option value="lastseen">Last Seen (Recent)</option>
		</select>
	</div>

	<table class="members-table" id="membersTable">
		<thead>
			<tr>
				<th>Status</th>
				<th>Username</th>
				<th>Title</th>
				<th>Posts</th>
				<th>Join Date</th>
				<th>Last Seen</th>
			</tr>
		</thead>
		<tbody id="membersTableBody">
		</tbody>
	</table>

	<div class="pagination">
		<strong>Pages:</strong>
		<a href="/" class="page-current">1</a>
		<a href="/" class="page-link">2</a>
		<a href="/" class="page-link">3</a>
		<a href="/" class="page-link">4</a>
		<a href="/" class="page-link">5</a>
		<span>...</span>
		<a href="/" class="page-link">67</a>
		<a href="/" class="page-link">Next »</a>
	</div>

	<div class="footer">
		<p class="blink">Powered by SillyBB</p>
		<a href="https://github.com/jaiden-04/bored">View GitHub Repository</a>
		<p><a href="mailto:admin@sillybb.net" style="color: #ffffff;">Contact Admin</a></p>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
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

	.page-title {
		background-color: #4169e1;
		color: #ffffff;
		padding: 15px;
		text-align: center;
		border: 2px solid #000000;
		margin-bottom: 20px;
	}

	.page-title h2 {
		font-size: 18px;
		margin-bottom: 5px;
	}

	.search-form {
		background-color: #ffd700;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
	}

	.search-form input {
		font-family: 'Courier New', monospace;
		font-size: 12px;
		padding: 2px;
		margin: 2px;
		border: 1px solid #000000;
	}

	.search-form button {
		font-family: 'Courier New', monospace;
		font-size: 12px;
		padding: 4px 8px;
		background-color: #e0e0e0;
		border: 2px solid #000000;
		cursor: pointer;
		margin-left: 5px;
	}

	.search-form button:hover {
		background-color: #ffffff;
	}

	.sort-options {
		background-color: #e0e0e0;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
	}

	.sort-options select {
		font-family: 'Courier New', monospace;
		font-size: 12px;
		padding: 2px;
		margin-left: 5px;
		border: 1px solid #000000;
	}

	.stats-bar {
		background-color: #ffff99;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
		text-align: center;
	}

	.online-members {
		background-color: #90ee90;
		border: 2px solid #000000;
		padding: 10px;
		margin-bottom: 20px;
	}

	.online-members h3 {
		margin-bottom: 10px;
		font-size: 14px;
	}

	.online-list {
		font-size: 11px;
	}

	.online-list a {
		margin-right: 10px;
		padding: 2px 4px;
		background-color: #ffffff;
		border: 1px solid #000000;
		text-decoration: none;
		color: #000000;
	}

	.online-list a:hover {
		background-color: #ffff00;
	}

	.members-table {
		margin-bottom: 20px;
	}

	.members-table th {
		background-color: #4169e1;
		color: #ffffff;
		font-weight: bold;
	}

	.status-cell {
		text-align: center;
		width: 40px;
		font-size: 16px;
	}

	.username-cell {
		width: 200px;
	}

	.user-rank {
		font-size: 10px;
		color: #666666;
		font-style: italic;
	}

	.title-cell {
		font-style: italic;
		color: #666666;
		font-size: 11px;
	}

	.posts-cell {
		text-align: center;
		width: 80px;
		font-size: 11px;
	}

	.date-cell {
		width: 100px;
		font-size: 11px;
	}

	.lastseen-cell {
		width: 120px;
		font-size: 11px;
	}

	.admin-row {
		background-color: #ffffcc;
	}

	.pagination {
		background-color: #e0e0e0;
		border: 2px solid #000000;
		padding: 10px;
		text-align: center;
		margin-bottom: 20px;
	}

	.pagination a {
		margin: 0 5px;
		padding: 2px 6px;
		background-color: #ffffff;
		border: 1px solid #000000;
		text-decoration: none;
		color: #000000;
	}

	.pagination a:hover {
		background-color: #ffff00;
	}

	.page-current {
		background-color: #ff6666 !important;
		color: #ffffff !important;
		font-weight: bold;
	}

	.footer {
		background-color: #808080;
		color: #ffffff;
		text-align: center;
		padding: 15px;
		border: 2px solid #000000;
		margin-top: 20px;
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
</body>
</html>