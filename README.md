# Как подготовить бекенд к первому запуску
```shell
back$ pip install -r requirements.txt
back$ python manage.py migrate
back$ python manage.py createsuperuser
```

# Как запустить целиком бек+фронт

```shell
testing-system-project$ docker-compose up -d
```

# Как запустить целиком бек+фронт отдельно друг от друга
```shell
front$ REACT_APP_PROXY=http://127.0.0.1:9000 npm run start
back$ python manage.py runserver 127.0.0.1:9000
```

# Проверь, что эти пути работают

http://127.0.0.1:8000/

http://127.0.0.1:8000/admin

http://127.0.0.1:8000/api/tests/