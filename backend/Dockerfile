FROM openjdk:17-slim-buster as build

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .
COPY src src

RUN ./mvnw -B package

FROM openjdk:17-slim-buster
COPY --from=build /target/*.jar monolith.jar
ENTRYPOINT ["java", "-jar", "monolith.jar"]
