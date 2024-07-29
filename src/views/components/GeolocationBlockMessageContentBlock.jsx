import React from 'react'

export default function GeolocationBlockMessageContentBlock() {
  return (
    <div className="">
        <p>Как теперь дать доступ к местоположению?</p>
        <ul>
            <li>
                <div>
                    <svg><use href={'icon-restart'}></use></svg>
                    <p>Перезагрузка страницы</p>
                </div>
                <p>Перезагрузите страницу и нажмите на кнопку автоматического определения местоположения еще раз.</p>
                <button>Перезагрузить страницу</button>
            </li>
            <li>
                <p>Если перезагрузка не помогла, нужно дать доступ к местоположению в настройках:</p>
            </li>
            <li>
                <div>
                    <img src={'./assets/images/browser-icons/icon-chrome.png'} />
                    <p>Chrome</p>
                </div>
                <div>
                    <span>Настройки</span>
                    <span>→</span>
                    <span>Конфиденциальность и безопасность</span>
                    <span>→</span>
                    <span>Настройки сайта</span>
                    <span>→</span>
                    <span>Геоданные</span>
                    <span>→</span>
                    <span>Weather Pulse</span>
                </div>
            </li>
        </ul>
    </div>
  )
}
