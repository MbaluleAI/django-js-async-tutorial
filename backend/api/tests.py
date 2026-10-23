from django.test import TestCase


class DataApiTests(TestCase):
    def test_data_endpoint_returns_successful_payload(self):
        response = self.client.get("/api/data/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "success")
        self.assertIn("message", response.json())
