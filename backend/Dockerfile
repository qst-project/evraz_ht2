from openjdk:17-slim-buster as build

copy .mvn .mvn
copy mvnw .
copy pom.xml .
copy src src

run ./mvnw -B package

entrypoint ["java", "-jar", "/target/monolith.jar"]
