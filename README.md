### react-native开发环境搭建（macOS环境android开发）
#### node安装
安装node12以上的版本
#### Java Development Kit安装
安装jdk1.8版本

    javac -version
    
#### 安装android开发环境（需要代理工具）
1、下载安装android studio<br>
2、安装android sdk<br>

    SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。
    具体路径是Appearance & Behavior → System Settings → Android SDK。
    
    选中
    Android SDK Platform 29
    Intel x86 Atom_64 System Image
    Android SDK 29.0.2
    
    点击Apply下载安装
    
3、配置ANDROID_HOME环境<br>
react-native需要了解android studio的SDK
    
    # 如果你的 shell 是 zsh，则配置文件为~/.zshrc，如果是 bash 则为~/.bash_profile（可以使用echo $0命令查看你所使用的 shell。）
    # 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚。
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/emulator
4、下载模拟器<br>

### 创建和运行react-native项目

    # 全局安装react-native脚手架工具
    npm install -g react-native-cli
    # 初始化项目
    npx react-native init myProject
    # 安装依赖
    npm install
    # 运行项目，确保运行了模拟器或连接了真机
    npm run android
    
### 打包apk
1、生成签名密钥<br>

     # 生成my-release-key.keystore文件，放在android/app目录下
     $ keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 1000
    
2、设置gradle变量<br>

     # 编辑/android/gradle.properties文件
     MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
     MYAPP_RELEASE_KEY_ALIAS=my-key-alias
     MYAPP_RELEASE_STORE_PASSWORD=*****
     MYAPP_RELEASE_KEY_PASSWORD=*****
     
 3、把签名配置加入到项目的 gradle 配置中<br>
 
    ...android {    
        ...    
        defaultConfig { ... }    
        signingConfigs {        
            release {            
                if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {                
                    storeFile file(MYAPP_RELEASE_STORE_FILE)                
                    storePassword MYAPP_RELEASE_STORE_PASSWORD                
                    keyAlias MYAPP_RELEASE_KEY_ALIAS                
                    keyPassword MYAPP_RELEASE_KEY_PASSWORD            
                }        
            }    
        }    
        buildTypes {        
            release {            
                ...            
                signingConfig signingConfigs.release        
            }    
        }
    }...

4、生成apk包<br>

    # 生成的apk包在android/app/build/outputs/apk/release/app-release.apk
    cd android
    ./gradlew assembleRelease
    

