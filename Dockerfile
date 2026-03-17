# ---- development stage ----
FROM node:20-alpine AS dev

WORKDIR /app

# 依存関係のインストール（キャッシュ効率化のため package.json を先にコピー）
COPY package*.json ./
RUN npm install

# ソースは volume マウントで上書きされるため、ここでは COPY しない
EXPOSE 5173

CMD ["npm", "run", "dev"]


# ---- build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---- preview stage (ビルド成果物の動作確認用) ----
FROM node:20-alpine AS preview

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY --from=builder /app/dist ./dist

EXPOSE 4173

CMD ["npm", "run", "preview"]
