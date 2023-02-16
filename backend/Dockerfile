FROM openjdk:17-slim-buster as build

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .
COPY src src

RUN ./mvnw -B package

FROM openjdk:17-slim-buster
COPY --from=build /target/*.jar monolith.jar

COPY ssl/YandexCA.crt /usr/local/share/ca-certificates/Yandex/YandexCA.crt
RUN chmod 655 /usr/local/share/ca-certificates/Yandex/YandexCA.crt
RUN cd /etc/security/ && keytool -importcert \
                 -alias YandexCA -file /usr/local/share/ca-certificates/Yandex/YandexCA.crt \
                 -keystore ssl -storepass sample-storepass \
                 --noprompt
RUN chmod 655 /etc/security/ssl

# windows fix
# RUN apt-get update && apt-get install dos2unix && apt-get clean && dos2unix mvnw

#COPY entrypoint.sh /entrypoint.shs
#RUN chmod +x /entrypoint.sh
#ENTRYPOINT ["/entrypoint.sh"]

CMD ["java", "-jar", "monolith.jar"]
