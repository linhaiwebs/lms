#!/bin/bash
# ============================================================
# WiseAI Finance 构建脚本
# 解决 Node.js 17+ 与 webpack 4 的 OpenSSL 不兼容问题
# 兼容 npm / yarn / pnpm
# ============================================================

set -e

# 强制启用旧版 OpenSSL 提供者（修复 ERR_OSSL_EVP_UNSUPPORTED）
export NODE_OPTIONS="--openssl-legacy-provider"

echo "=========================================="
echo " WiseAI Finance Build"
echo " Node: $(node -v)"
echo " NODE_OPTIONS: $NODE_OPTIONS"
echo "=========================================="

# 检测包管理器
if [ -f "pnpm-lock.yaml" ]; then
  echo "使用 pnpm 构建..."
  pnpm run build
elif [ -f "yarn.lock" ]; then
  echo "使用 yarn 构建..."
  yarn build
else
  echo "使用 npm 构建..."
  npm run build
fi

echo "=========================================="
echo " ✅ 构建成功！输出目录: build/"
echo "=========================================="
