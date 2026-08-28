const themeRoot=document.documentElement;
const themeButton=document.createElement('button');
themeButton.className='theme-toggle';
themeButton.type='button';
document.querySelector('.top-actions').prepend(themeButton);
function applyTheme(theme,persist=true){themeRoot.dataset.theme=theme;document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#050506':'#00aff0';themeButton.innerHTML=theme==='dark'?'<span class="theme-toggle-icon">☀</span><span class="theme-toggle-label">HELL</span>':'<span class="theme-toggle-icon">☾</span><span class="theme-toggle-label">SCHWARZ</span>';themeButton.setAttribute('aria-label',theme==='dark'?'Hellen Hintergrund einschalten':'Schwarzen Hintergrund einschalten');themeButton.setAttribute('aria-pressed',String(theme==='dark'));if(persist)localStorage.setItem('only-wizzard-theme',theme);document.querySelectorAll('.giscus-frame').forEach(frame=>frame.contentWindow?.postMessage({giscus:{setConfig:{theme:theme==='dark'?'dark_dimmed':'light'}}},'https://giscus.app'))}
applyTheme(themeRoot.dataset.theme==='dark'?'dark':'light',false);
themeButton.addEventListener('click',()=>applyTheme(themeRoot.dataset.theme==='dark'?'light':'dark'));
