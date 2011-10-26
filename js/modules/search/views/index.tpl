<div class="container">
	<% if (keyword) { %>
			<h4>Keyword: `<%= keyword %>`</h4>
	<% } else { %>
		<div class="alert-message block-message error">
			<h4>Nothing to Search.</h4>
			<p>You did not specify a keyword to search.</p>
		</div>
	<% } %>
</div>