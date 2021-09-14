### SETUP
```
cd app
npm install
cd ../client
bundle install
```

### RUN SERVER WITH THE NGINX REVERSE PROXY
```
docker-compose up --build
```

### RUN CLIENT
```
ruby client/client.rb
```


