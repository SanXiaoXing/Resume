/**
 * @Author: SanXiaoXing
 * @Date: 2025-04-11
 * @Description: 返回上一级导航功能
 */

// 创建返回按钮并添加到页面
function addBackButton(buttonText, buttonHref) {
    // 使用传入的文本或默认文本
    const text = buttonText || '&#8592; 返回归档页面';
    
    // 使用传入的链接或默认链接
    const href = buttonHref || '../archived.html';
    
    // 创建返回按钮元素
    const backButton = document.createElement('a');
    backButton.href = href;
    backButton.className = 'back-button';
    backButton.innerHTML = text;

    // 设置按钮样式
    backButton.style.position = 'fixed';
    backButton.style.top = '20px';
    backButton.style.left = '20px';
    backButton.style.textDecoration = 'none';
    backButton.style.color = '#333';
    backButton.style.fontSize = '16px';
    backButton.style.padding = '8px 12px';
    backButton.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    backButton.style.borderRadius = '4px';
    backButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    backButton.style.zIndex = '1000';
    backButton.style.transition = 'all 0.2s ease';

    // 添加悬停效果
    backButton.onmouseover = function() {
        this.style.backgroundColor = 'rgba(255, 152, 89, 0.2)';
        this.style.color = '#ff9859';
    };

    backButton.onmouseout = function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        this.style.color = '#333';
    };

    // 将按钮添加到页面
    document.body.appendChild(backButton);
}

// 获取自定义按钮文本和链接（如果在页面中定义了）
function initBackButton() {
    // 检查页面中是否定义了全局变量
    const customText = window.backButtonText || null;
    const customHref = window.backButtonHref || null;
    addBackButton(customText, customHref);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', initBackButton);