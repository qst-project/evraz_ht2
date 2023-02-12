from openjdk:17-slim-buster as build

copy .mvn .mvn
copy mvnw .
copy pom.xml .
copy src src

run ./mvnw -B package

from openjdk:17-slim-buster
copy --from=build /target/*.jar monolith.jar
entrypoint ["java", "-jar", "monolith.jar"]
