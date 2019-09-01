from rest_framework import routers
from .api import SalalViewSet

router = routers.DefaultRouter()
router.register('api/salal', SalalViewSet, 'salal')

urlpatterns = router.urls