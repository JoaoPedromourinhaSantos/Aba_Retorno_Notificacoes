
$(document).ready(function() {
    var stocks = ["AAPL", "GOOG", "AMZN", "FB"];
  
    // Atualiza as informações sobre as ações a cada 30 segundos
    setInterval(function() {
      $.getJSON("https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=" + stocks.join(",") + "&apikey=SUA_API_KEY", function(data) {
        var stocksHtml = "";
        $.each(data["Stock Quotes"], function(i, quote) {
          stocksHtml += "<li>" + quote["1. symbol"] + ": " + quote["2. price"] + "</li>";
        });
        $("#stock-list").html(stocksHtml);
        $("#last-updated").text(new Date().toLocaleString());
      });
    }, 30);
  });


  