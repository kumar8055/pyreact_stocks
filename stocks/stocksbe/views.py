from django.shortcuts import render

# Create your views here.
from rest_framework import views
from rest_framework.response import Response
from .serializers import StockSerializer
import yfinance as yf

class Stockinfo(views.APIView):
    def get(self, request, tk="aapl"):
        stock = yf.Ticker(tk.upper())
        data = {
            "metadata" :{
                "tickers" : tk
            },
            "data":stock.info
        }
        results = StockSerializer(data).data
        return Response(results)