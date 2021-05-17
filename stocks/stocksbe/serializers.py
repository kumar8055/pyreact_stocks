from rest_framework import serializers

class StockSerializer(serializers.Serializer):
    metadata = serializers.JSONField()
    data = serializers.JSONField()