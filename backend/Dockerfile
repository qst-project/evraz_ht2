FROM openjdk:17-slim-buster as build

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .
COPY src src

RUN apt-get update && apt-get install dos2unix && apt-get clean
RUN dos2unix mvnw

RUN ./mvnw -B package

FROM openjdk:17-slim-buster
COPY --from=build /target/*.jar monolith.jar
ENTRYPOINT ["java", "-jar", "monolith.jar"]
