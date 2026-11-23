window.onload = function () {
	const HideInfoUrlPartsPlugin = () => {
		return {
			wrapComponents: {
				InfoUrl: () => () => null,
				InfoBasePath: () => () => null, // this hides the `Base Url` part too, if you want that
			}
		}
	}

	function HideTopbarPlugin() {
		return {
			components: {
				Topbar: function () { return null }
			}
		}
	}
	var configObject = JSON.parse('{"urls":[{"url":"https://api.map4d.vn/docs/public.json","name":"public"}],"deepLinking":false,"displayOperationId":false,"defaultModelsExpandDepth":1,"defaultModelExpandDepth":1,"defaultModelRendering":"example","displayRequestDuration":false,"docExpansion":"list","showExtensions":false,"showCommonExtensions":false,"supportedSubmitMethods":["get","put","post","delete","options","head","patch","trace"],"validatorUrl":null}');
	var oauthConfigObject = JSON.parse('{"clientId":"clientId","clientSecret":"clientSecret","scopeSeperator":" ","useBasicAuthenticationWithAccessCodeGrant":false}');

	// Apply mandatory parameters
	configObject.dom_id = "#swagger-ui";
	configObject.presets = [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset];

	configObject.plugins = [SwaggerUIBundle.plugins.DownloadUrl, HideInfoUrlPartsPlugin, resetDisplay]
	configObject.layout = "StandaloneLayout";
	configObject.callbacks = [resetDisplay];

	// If oauth2RedirectUrl isn't specified, use the built-in default
	if (!configObject.hasOwnProperty("oauth2RedirectUrl"))
		configObject.oauth2RedirectUrl = window.location.href.replace("index.html", "oauth2-redirect.html").split('#')[0];

	// Begin Swagger UI call region
	const ui = SwaggerUIBundle(configObject);

	ui.initOAuth(oauthConfigObject);

	// End Swagger UI call region
	window.ui = ui
	var interval = null;
	function resetDisplay(){
		var collections = $(".opblock-tag-section.is-open");
		if(collections.length == 0){
			interval = setTimeout(function(){
				var collections = $(".opblock-tag-section.is-open");
				if(collections.length == 0){
					resetDisplay();
				}else{
					setDisplayItem();
					clearTimeout(interval);
				}
			}, 500);
		}else{
			setDisplayItem();
		}
		
	}
	function setDisplayItem(){
		var collections = $(".opblock-tag-section.is-open");
		var it = null;
		var parent = null;
		for(var i = 0; i < collections.length; i++){
			var item = collections[i];
			var check = $(item).find("a.nostyle span");
			for(var j = 0; j < check.length; j++){
				var aa = check[j].innerHTML.trim();
				$(check[j]).closest("div .opblock").css("display","none");
				if(aa == api){
					it = check[j];
					parent = item;
				}
			}
		}
		if(it != null){
			$(parent).css("display","block");
			$(it).closest("div .opblock").css("display","block");
		}
		$(".swagger-ui .opblock-tag-section.is-open .opblock-tag" ).click(function(event) {
			event.preventDefault();
			event.stopImmediatePropagation();
			event.stopPropagation();
		});
	}			
	
}