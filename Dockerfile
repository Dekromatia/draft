# базовый образ
FROM ubuntu:focal
# команда ран - на фазе сборки
RUN apt update
RUN apt install -y python3-pip
RUN pip3 install eve-sqlalchemy


# создать дирректорию
RUN mkdir -p /app
# указать дирректорию в которой мы будем выполнять наше приложение
WORKDIR /app

# копируем все[если . /app/] содержимое из текущей дирриктории в папку /app , можно указать конкретную папку
COPY . /app/

# команда для запуска на этапе выполнения контейнера
CMD ["python3", "rest.py"]

# порт который мы хотим отдавать
EXPOSE 5051