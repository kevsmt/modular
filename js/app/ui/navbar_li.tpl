<% if (menu && menu.length > 0) { %>
	<li class="dropdown">
		<a href="<%= href %>" class="dropdown-toggle" data-dropdown="true"><%= text %></a>
		<ul class="dropdown-menu">
			<% _.each(menu, function(m) { %>
				<% if (m == '-') { %>
					<li class="divider"></li>
				<% } else { %>
					<li><a href="<%= m.href %>"><%= m.text %></a></li>
				<% } %>
			<% }); %>
		</ul>
	</li>
<% } else { %>
	<li><a href="<%= href %>"><%= text %></a></li>
<% } %>