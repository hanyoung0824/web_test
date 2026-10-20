# ---------- 1단계: React 빌드 ----------
FROM node:24-alpine AS build
WORKDIR /app

# 의존성 먼저 설치 (캐시 활용)
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

# 소스 복사 후 빌드 → /app/dist
COPY frontend/ .
RUN npm run build

# ---------- 2단계: Nginx ----------
FROM nginx:1.28-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html