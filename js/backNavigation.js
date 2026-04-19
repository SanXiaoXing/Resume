/**
 * @Author: SanXiaoXing
 * @Date: 2025-04-11
 * @Description: 全局导航栏与返回功能
 */

function addHeader(buttonText, buttonHref) {
    const text = buttonText || '返回';
    const href = buttonHref || '../archived.html';
    
    // 移除原生箭头文本以替换为更现代的 SVG 图标
    const cleanText = text.replace(/&#8592;|←/g, '').trim();
    const isBack = cleanText.includes('返回');
    const isArchive = cleanText.includes('归档');

    // 注入专属样式，不依赖 Tailwind CSS，采用 iOS 玻璃材质与圆角悬浮设计
    if (!document.getElementById('nav-header-style')) {
        const style = document.createElement('style');
        style.id = 'nav-header-style';
        style.textContent = `
            .sx-nav-header {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 90%;
                max-width: 1000px;
                padding: 12px 24px;
                background: rgba(255, 255, 255, 0.65);
                backdrop-filter: blur(20px) saturate(180%);
                -webkit-backdrop-filter: blur(20px) saturate(180%);
                border: 1px solid rgba(255, 255, 255, 0.4);
                border-radius: 24px;
                box-shadow: 
                    0 4px 24px -1px rgba(0, 0, 0, 0.08),
                    0 0 1px 1px rgba(255, 255, 255, 0.5) inset;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                box-sizing: border-box;
            }
            .sx-nav-header:hover {
                background: rgba(255, 255, 255, 0.75);
                box-shadow: 
                    0 8px 32px -2px rgba(0, 0, 0, 0.1),
                    0 0 1px 1px rgba(255, 255, 255, 0.6) inset;
            }
            .sx-nav-header * { box-sizing: border-box; margin: 0; padding: 0; }
            .sx-nav-brand {
                display: flex; align-items: center; gap: 14px; text-decoration: none;
                cursor: pointer;
            }
            .sx-nav-logo {
                position: relative; display: flex; align-items: center; justify-content: center;
                width: 40px; height: 40px; border-radius: 14px;
                background: white; /* 移除渐变背景以更好地展示 SVG */
                box-shadow: 0 4px 12px rgba(234, 88, 12, 0.15); /* 阴影也相应减轻 */
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                overflow: hidden;
                border: 1px solid rgba(234, 88, 12, 0.1);
            }
            .sx-nav-logo img {
                width: 70%; /* 稍微缩小一点，给圆角留出呼吸空间 */
                height: 70%;
                object-fit: contain;
            }
            .sx-nav-brand:hover .sx-nav-logo {
                transform: scale(1.05) rotate(3deg);
                box-shadow: 0 6px 16px rgba(234, 88, 12, 0.4);
            }
            .sx-nav-text { display: flex; flex-direction: column; justify-content: center; }
            .sx-nav-title {
                font-weight: 700; color: #1d1d1f; font-size: 15px;
                letter-spacing: -0.2px; transition: color 0.3s ease;
            }
            .sx-nav-brand:hover .sx-nav-title { color: #ea580c; }
            .sx-nav-subtitle { font-size: 12px; color: #86868b; font-weight: 500; letter-spacing: -0.1px; }
            
            .sx-nav-actions { display: flex; align-items: center; gap: 12px; }
            .sx-nav-btn {
                display: flex; align-items: center; gap: 6px;
                padding: 8px 18px; 
                background: rgba(255, 255, 255, 0.5);
                border: 1px solid rgba(0, 0, 0, 0.05);
                border-radius: 20px; font-size: 14px; font-weight: 600;
                color: #1d1d1f; text-decoration: none; cursor: pointer;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .sx-nav-btn svg { width: 16px; height: 16px; transition: transform 0.3s ease; }
            .sx-nav-btn:hover {
                color: #fff; 
                background: linear-gradient(135deg, #fb923c, #ea580c);
                border-color: rgba(234, 88, 12, 0.4);
                box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
            }
            .sx-nav-btn.back-btn:hover svg { transform: translateX(-4px); }
            .sx-nav-btn.archive-btn:hover svg { transform: translateY(-2px); }
            
            .sx-nav-icon-btn {
                display: flex; align-items: center; justify-content: center;
                width: 38px; height: 38px; border-radius: 50%;
                border: 1px solid rgba(0, 0, 0, 0.05); color: #1d1d1f; text-decoration: none;
                transition: all 0.3s ease; background: rgba(255, 255, 255, 0.5);
            }
            .sx-nav-icon-btn:hover {
                color: #fff; background: linear-gradient(135deg, #fb923c, #ea580c);
                box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
                border-color: rgba(234, 88, 12, 0.4);
            }
            .sx-nav-icon-btn svg { width: 20px; height: 20px; }
            
            @media (max-width: 640px) {
                .sx-nav-header {
                    width: calc(100% - 32px);
                    padding: 10px 16px;
                }
                .sx-nav-subtitle { display: none; }
            }
        `;
        document.head.appendChild(style);
    }

    const iconSvg = isArchive 
        ? `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>`
        : `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>`;

    // 创建 Header 容器
    const header = document.createElement('header');
    header.className = 'sx-nav-header';
    
    // 判断层级决定Logo链接
    const isArchivedFolder = window.location.pathname.includes('/Archived/') || window.location.href.includes('/Archived/');
    
    // 品牌区
    const brand = document.createElement('a');
    brand.href = isArchivedFolder ? '../index.html' : 'index.html';
    brand.className = 'sx-nav-brand';
    
    // 正确的相对路径处理，保证归档和首页都能正确获取 favicon
    const faviconPath = isArchivedFolder ? '../assets/favicon.svg' : './assets/favicon.svg';

    brand.innerHTML = `
        <div class="sx-nav-logo">
            <img src="${faviconPath}" alt="Logo" />
        </div>
        <div class="sx-nav-text">
            <span class="sx-nav-title">SanXiaoXing</span>
            <span class="sx-nav-subtitle">Resume Portfolio</span>
        </div>
    `;

    // 操作区
    const nav = document.createElement('nav');
    nav.className = 'sx-nav-actions';
    
    // Github
    if (isArchive) {
        const githubBtn = document.createElement('a');
        githubBtn.href = 'https://github.com/SanXiaoXing';
        githubBtn.target = '_blank';
        githubBtn.className = 'sx-nav-icon-btn';
        githubBtn.title = 'GitHub Profile';
        githubBtn.innerHTML = `<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>`;
        nav.appendChild(githubBtn);
    }
    
    // 主操作按钮
    const actionButton = document.createElement('a');
    actionButton.href = href;
    actionButton.className = 'sx-nav-btn ' + (isArchive ? 'archive-btn' : 'back-btn');
    actionButton.innerHTML = `${iconSvg}<span>${cleanText}</span>`;
    nav.appendChild(actionButton);
    
    header.appendChild(brand);
    header.appendChild(nav);
    
    document.body.insertBefore(header, document.body.firstChild);

    // 页面下移，防止被 fixed 的 Header 遮挡
    const rootEl = document.getElementById('root') || document.querySelector('.min-h-screen') || document.body;
    
    // 如果是存档详情页（通常 iframe 外层）
    if (isArchivedFolder) {
        // 在某些归档详情页中，可能有特有的包裹层
        const firstDiv = document.querySelector('body > div');
        if (firstDiv && firstDiv !== header) {
            firstDiv.style.paddingTop = '100px';
        } else {
            document.body.style.paddingTop = '100px';
        }
    } else {
        // 归档列表页不需要通过 JS 加 paddingTop，已在 HTML 中通过 pt-24 控制
        if (!window.location.pathname.includes('archived.html')) {
            if (rootEl !== document.body) {
                rootEl.style.paddingTop = '100px';
            } else {
                document.body.style.paddingTop = '100px';
            }
        }
    }
}

function initNavigation() {
    const customText = window.backButtonText || null;
    const customHref = window.backButtonHref || null;
    addHeader(customText, customHref);
}

document.addEventListener('DOMContentLoaded', initNavigation);
