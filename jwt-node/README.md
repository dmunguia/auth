# Authentication and authorization using express

To test authentication first create an user.

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"user@mock.com","password":"p455w0rd"}' \
  http://localhost:3000/api/user
```

Then authenticate to get token.

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"user@mock.com","password":"p455w0rd"}' \
  http://localhost:3000/api/user/authentication
```

Public endpoints don't require any authentication.

```bash
curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:3000/health
```

Private endpoints do require authentication.

```bash
curl --header "Content-Type: application/json" \
  --header "Authorization: Bearer <insert token here>" \
  --request GET \
  http://localhost:3000/api/task
```
