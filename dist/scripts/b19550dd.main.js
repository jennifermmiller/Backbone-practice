var dataArray=[{name:"Bob",phone:"905-345-4553",bio:"k. Biodiesel lomo occupy, DIY trust fund wolf fap Pitchfork Schlitz ethical mustache. Lo-fi High Life PBR, vinyl +1 photo booth lomo trust fund 90's bespoke. Kogi Cosby sweater locavore quinoa whatever, cornhole fap forage synth semiotics church-key flannel mustache cray. McSweeney's blog Terry Richardson viral, lomo slow-carb bespoke sriracha banjo 3 wolf moon Portland ethnic Tonx hashtag wolf.",avatar:"images/beer-icon.jpeg"},{name:"Jane",phone:"980-345-4569",bio:"Gluten-free food truck sustainable irony, ugh VHS blog Blue Bottle mustache occupy selfies lo-fi before they sold out McSweeney's Etsy. You probably haven't heard of them Banksy bitters sartorial cardigan trust fund. Artisan Vice PBR&B vegan.",avatar:"images/smiley-icon.jpg"},{name:"Frank",phone:"900-980-7654",bio:"Tattooed typewriter try-hard, Echo Park tofu banjo yr Odd Future you probably haven't heard of them selvage scenester narwhal gentrify. Intelligentsia fixie vinyl Tumblr, photo booth +1 pour-over Godard swag tote bag PBR brunch.",avatar:"images/penguin-icon.png"},{name:"Tiny",phone:"908-457-1213",bio:"Street art ugh tofu tousled put a bird on it. Echo Park four loko keytar, artisan hashtag dreamcatcher Williamsburg polaroid single-origin coffee. High Life banjo dreamcatcher, whatever Pinterest DIY umami tousled Vice bespoke 3 wolf moon twee plaid squid.",avatar:"images/joecamel-icon.gif"}],Contact=Backbone.Model.extend({defaults:{name:"???",phone:"(999) 999-9999",bio:"grumpy",avatar:"http://www.brunningonline.net/simon/blog/archives/002272.html"}}),ContactsCollection=Backbone.Collection.extend({model:Contact}),ListView=Backbone.View.extend({className:"list-item",createTemplate:_.template($("#list-item-template").text()),events:{"click .expand":"toJumbotron"},initialize:function(){$(".js-contact-list").append(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes))},toJumbotron:function(){new MainView({model:this.model})}}),MainView=Backbone.View.extend({className:"focus-item",createTemplate:_.template($("#main-item-template").text()),events:{"click .edit":"editModel","click .remove":"deleteModel","click .clear":"voidJumbotron"},initialize:function(){$(".js-focus-item").html(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes))},editModel:function(){new EditView({model:this.model})},deleteModel:function(){this.remove()},voidJumbotron:function(){}}),EditView=Backbone.View.extend({className:"edit-info",renderTemplate:_.template($("#edit-item-template").text()),events:{"click .submit":"updateInfo"},initialize:function(){$(".js-focus-item").html(this.el),this.render()},render:function(){this.$el.html(this.renderTemplate(this.model.attributes)),this.$el.find(".js-edit-name").focus()},updateInfo:function(){var a=this.input.val();this.model.save(a)}});console.log("'Allo 'Allo!"),$(document).ready(function(){window.contacts=new ContactsCollection(dataArray),contacts.each(function(a){new ListView({model:a})})});