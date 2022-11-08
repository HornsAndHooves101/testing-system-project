# Как пересобрать фронт после изменения файлов (фронт начинает отсюда)

это нужно только после редактирования файлов, для запуска системы не нужно (если существует папка `front/build`)
```shell
front$ npm run build
```

# Как подготовить бекенд к первому запуску (бек начинает отсюда)
```shell
back$ pip install -r requirements.txt
back$ python manage.py migrate
back$ python manage.py createsuperuser
```

# Как запустить целиком бек+фронт

```shell
testing-system-project$ docker-compose up
```
опционально в конце добавить ключ `-d`


# Проверь, что эти пути работают

http://127.0.0.1:8000/api/tests/

http://127.0.0.1:8000/

http://127.0.0.1:8000/admin