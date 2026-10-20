# ---------- 1단계: 빌드 ----------
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

# 의존성 관련 파일만 먼저 복사해서 다운로드 (캐시 활용)
COPY gradlew .
COPY gradle gradle
COPY build.gradle settings.gradle ./
RUN ./gradlew dependencies --no-daemon

# 소스 복사 후 jar 빌드
COPY src src
RUN ./gradlew bootJar --no-daemon

# ---------- 2단계: 실행 ----------
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]