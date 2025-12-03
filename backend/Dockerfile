# Etapa de build
FROM eclipse-temurin:21-jdk-jammy AS build

WORKDIR /app

# Copiamos todo el backend
COPY . .

# Damos permiso de ejecución a gradlew y construimos el jar
RUN chmod +x ./gradlew \
    && ./gradlew clean bootJar -x test

# Etapa de runtime
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

# Copiamos el jar construido desde la etapa anterior
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
