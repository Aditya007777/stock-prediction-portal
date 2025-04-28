from django.urls import path
from accounts import views as accountsView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns = [
    path('register/', accountsView.RegisterView.as_view()),
    path ('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path ('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path ('protected-view/', accountsView.ProtectedView.as_view()),

]