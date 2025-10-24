// 项目数据展示功能
$(document).ready(function() {
    console.log('项目数据加载脚本已启动');
    
    // 获取项目数据并展示
    function loadProjects() {
        console.log('正在从后端获取项目数据...');
        
        // 创建XMLHttpRequest对象
        var xhr = new XMLHttpRequest();
        
        // 配置请求
        xhr.open('GET', 'http://localhost:5000/api/projects', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        // 请求成功处理函数
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('成功获取项目数据');
                try {
                    var response = JSON.parse(xhr.responseText);
                    var projects = response.data || response; // 适配不同的数据结构
                    console.log('共获取到 ' + projects.length + ' 个项目');
                    displayProjects(projects);
                } catch (e) {
                    console.error('解析JSON数据失败:', e);
                    showError('数据解析错误，请稍后重试');
                }
            } else {
                console.error('获取数据失败，状态码:', xhr.status);
                showError('获取数据失败，状态码: ' + xhr.status);
            }
        };
        
        // 请求失败处理函数
        xhr.onerror = function() {
            console.error('网络错误，无法连接到后端服务');
            showError('网络连接错误，请检查后端服务是否运行');
        };
        
        // 发送请求
        xhr.send();
    }
    
    // 展示项目数据
    function displayProjects(projects) {
        // 查找页面中可能展示项目的容器
        var projectContainers = [
            '.lt13Box .swiper-wrapper',
            '.lt4Box .swiper-wrapper',
            '#projects-container'
        ];
        
        var container = null;
        
        // 寻找第一个存在的容器
        for (var i = 0; i < projectContainers.length; i++) {
            if ($(projectContainers[i]).length > 0) {
                container = $(projectContainers[i]);
                break;
            }
        }
        
        // 如果没有找到现有容器，创建一个新的
        if (!container || container.length === 0) {
            // 在页面底部添加一个项目展示区域
            var newSection = $('<section style="padding: 40px 0; background-color: #f8f9fa;">
                <div class="container">
                    <h2 style="text-align: center; margin-bottom: 30px; color: #333;">项目展示</h2>
                    <div id="projects-container" class="row"></div>
                </div>
            </section>');
            
            // 插入到页脚之前
            $('footer').before(newSection);
            container = $('#projects-container');
        }
        
        // 清空容器内容
        container.empty();
        
        // 如果是轮播容器，使用轮播格式
        if (container.hasClass('swiper-wrapper')) {
            projects.forEach(function(project) {
                var slide = $('<div class="swiper-slide">
                    <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="margin-top: 0; color: #333;">' + (project.title || '未命名项目') + '</h3>
                        <p style="color: #666; margin-bottom: 15px; line-height: 1.6;">' + 
                            (project.description ? project.description.substring(0, 100) + '...' : '暂无描述') + 
                        '</p>
                        <div style="color: #999; font-size: 14px;">
                            <span>类别: ' + (project.category || '未知') + '</span>
                            <span style="margin: 0 10px;">|</span>
                            <span>状态: ' + (project.status || '未知') + '</span>
                        </div>
                    </div>
                </div>');
                container.append(slide);
            });
        } else {
            // 否则使用网格布局
            projects.forEach(function(project) {
                var card = $('<div class="col-md-4 mb-4">
                    <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); height: 100%;">
                        <h3 style="margin-top: 0; color: #333;">' + (project.title || '未命名项目') + '</h3>
                        <p style="color: #666; margin-bottom: 15px; line-height: 1.6;">' + 
                            (project.description ? project.description.substring(0, 150) + '...' : '暂无描述') + 
                        '</p>
                        <div style="color: #999; font-size: 14px; margin-bottom: 10px;">
                            <span>类别: ' + (project.category || '未知') + '</span>
                        </div>
                        <div style="color: #999; font-size: 14px; margin-bottom: 10px;">
                            <span>状态: ' + (project.status || '未知') + '</span>
                        </div>
                        <div style="color: #999; font-size: 14px;">
                            <span>开始时间: ' + (project.startDate ? new Date(project.startDate).toLocaleDateString() : '未知') + '</span>
                        </div>
                    </div>
                </div>');
                container.append(card);
            });
        }
        
        console.log('项目数据已成功展示在页面上');
    }
    
    // 显示错误信息
    function showError(message) {
        // 查找或创建错误提示区域
        var errorContainer = $('#api-error-container');
        if (errorContainer.length === 0) {
            errorContainer = $('<div id="api-error-container" style="position: fixed; top: 20px; right: 20px; background: #f8d7da; color: #721c24; padding: 15px 20px; border-radius: 5px; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.2);"></div>');
            $('body').append(errorContainer);
        }
        
        // 设置错误信息
        errorContainer.text(message);
        
        // 3秒后自动隐藏
        setTimeout(function() {
            errorContainer.fadeOut(500, function() {
                $(this).remove();
            });
        }, 3000);
    }
    
    // 添加一个测试按钮到页面，用于手动触发API调用
    function addTestButton() {
        var button = $('<button id="test-api-button" style="position: fixed; bottom: 20px; right: 20px; background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; z-index: 999;">测试后端API</button>');
        $('body').append(button);
        
        button.click(function() {
            loadProjects();
        });
    }
    
    // 页面加载后尝试加载项目数据
    loadProjects();
    
    // 添加测试按钮
    addTestButton();
    
    // 监听页面滚动，实现回到顶部功能
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            if ($('#back-to-top').length === 0) {
                var backButton = $('<button id="back-to-top" style="position: fixed; bottom: 70px; right: 20px; background: #6c757d; color: white; border: none; padding: 10px; border-radius: 50%; cursor: pointer; z-index: 999; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">↑</button>');
                $('body').append(backButton);
                
                backButton.click(function() {
                    $('html, body').animate({ scrollTop: 0 }, 300);
                });
            }
        } else {
            $('#back-to-top').remove();
        }
    });
});