<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="171"/>
        <source>Error writing to storage</source>
        <translation>写入时出错</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="197"/>
        <location filename="../downloadextractthread.cpp" line="386"/>
        <source>Error extracting archive: %1</source>
        <translation>解压 %1 时出错</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="262"/>
        <source>Error mounting FAT32 partition</source>
        <translation>挂载FAT32分区错误</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="282"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>操作系统未能挂载FAT32分区</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="305"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>进入文件夹 “%1” 错误</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="166"/>
        <source>Error running diskpart: %1</source>
        <translation>运行 “diskpart” 命令错误 %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="187"/>
        <source>Error removing existing partitions</source>
        <translation>删除现有分区时出错</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="213"/>
        <source>Authentication cancelled</source>
        <translation>认证已取消</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="216"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>运行authopen以获得对磁盘设备&apos;%1&apos;的访问权限时出错</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>请验证是否在隐私设置中允许“ Raspberry Pi Imager”访问“可移动卷”（在“文件和文件夹”下，或者为它提供“完全磁盘访问”）的权限。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="239"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>无法打开存储设备&apos;%1&apos;。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="281"/>
        <source>discarding existing data on drive</source>
        <translation>删除现有数据</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="301"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>清空驱动器未使用的数据</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="307"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>将MBR清零时写入错误</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="813"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>从存储读取数据时错误。&lt;br&gt;SD卡可能已损坏。</translation>
    </message>
    <message>
        <source>Waiting for FAT partition to be mounted</source>
        <translation type="vanished">等待FAT分区挂载</translation>
    </message>
    <message>
        <source>Error mounting FAT32 partition</source>
        <translation type="vanished">挂载FAT32分区错误</translation>
    </message>
    <message>
        <source>Operating system did not mount FAT32 partition</source>
        <translation type="vanished">操作系统未能挂载FAT32分区</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="885"/>
        <source>Customizing image</source>
        <translation>使用自定义镜像</translation>
    </message>
    <message>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation type="vanished">在FAT分区上创建firstrun.sh脚本文件时出错</translation>
    </message>
    <message>
        <source>Error writing to config.txt on FAT partition</source>
        <translation type="vanished">在FAT分区上写入config.txt时出错</translation>
    </message>
    <message>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation type="vanished">在FAT分区上写入cmdline.txt时出错</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="451"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>将文件写入磁盘时访问被拒绝。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="456"/>
        <source>Controlled Folder Access seems to be enabled. Please add both rpi-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>受控文件夹访问似乎已启用。 请将rpi-imager.exe和fat32format.exe都添加到允许的应用程序列表中，然后重试。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="463"/>
        <source>Error writing file to disk</source>
        <translation>将文件写入磁盘时出错</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="482"/>
        <source>Error downloading: %1</source>
        <translation>下载文件错误，已下载：%1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="705"/>
        <location filename="../downloadthread.cpp" line="757"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>刷写存储时出错</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="712"/>
        <location filename="../downloadthread.cpp" line="764"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>在fsync时写入存储时出错</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="693"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>下载的文件损坏。 哈希值不匹配</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="118"/>
        <source>unmounting drive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="138"/>
        <source>opening drive</source>
        <translation>打开驱动器</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="319"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>写入镜像失败&lt;br&gt;SD卡可能损坏。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="408"/>
        <source>starting download</source>
        <translation>开始下载</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="747"/>
        <source>Error writing first block (partition table)</source>
        <translation>写入第一个块（分区表）时出错</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="832"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>验证写入失败。 SD卡的内容与写入的内容不同。</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>错误分区：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>启动fat32format命令时出错</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>运行fat32format时出错：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>确定新驱动器号时出错</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>无效的设备：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>格式化错误</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>启动sfdisk命令时出错</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>启动mkfs.fat时出错</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>运行mkfs.fat时出错：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>暂不支持此平台的格式化</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="248"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>存储容量不足。&lt;br&gt;至少需要%1 GB的空白空间.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="254"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>输入文件不是有效的磁盘映像。&lt;br&gt;文件大小%1字节不是512字节的倍数。</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="442"/>
        <source>Downloading and writing image</source>
        <translation>下载和写入镜像</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="575"/>
        <source>Select image</source>
        <translation>选择镜像</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="864"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>导入系统镜像</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>打开图像文件时出错</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="98"/>
        <source>NO</source>
        <translation>不</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="109"/>
        <source>YES</source>
        <translation>是</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="120"/>
        <source>CONTINUE</source>
        <translation>继续</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>QUIT</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="80"/>
        <source>Advanced options</source>
        <translation>高级设置</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="97"/>
        <source>Image customization options</source>
        <translation>镜像自定义选项</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="105"/>
        <source>for this session only</source>
        <translation>仅限本次</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="106"/>
        <source>to always use</source>
        <translation>永久保存</translation>
    </message>
    <message>
        <source>Disable overscan</source>
        <translation type="vanished">禁用扫描</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="120"/>
        <source>Set hostname:</source>
        <translation>设置主机名：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="140"/>
        <source>Enable SSH</source>
        <translation>开启SSH服务</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="162"/>
        <source>Use password authentication</source>
        <translation>使用密码登录</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="172"/>
        <source>Allow public-key authentication only</source>
        <translation>只允许使用公匙登录</translation>
    </message>
    <message>
        <source>Set password for &apos;%1&apos; user:</source>
        <translation type="vanished">设置&apos;%1&apos;用户的密码：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="190"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>设置%1用户的登录密匙：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Configure wireless LAN</source>
        <translation>配置WiFi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="283"/>
        <source>SSID:</source>
        <translation>热点名：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="237"/>
        <location filename="../OptionsPopup.qml" line="303"/>
        <source>Password:</source>
        <translation>密码：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="203"/>
        <source>Set username and password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="222"/>
        <source>Username:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="298"/>
        <source>Hidden SSID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="319"/>
        <source>Show password</source>
        <translation>显示密码</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="324"/>
        <source>Wireless LAN country:</source>
        <translation>WIFI国家：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="335"/>
        <source>Set locale settings</source>
        <translation>语言设置</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="345"/>
        <source>Time zone:</source>
        <translation>时区：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="355"/>
        <source>Keyboard layout:</source>
        <translation>键盘布局：</translation>
    </message>
    <message>
        <source>Skip first-run wizard</source>
        <translation type="vanished">跳过首次启动向导</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="368"/>
        <source>Persistent settings</source>
        <translation>永久设置</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="376"/>
        <source>Play sound when finished</source>
        <translation>完成后播放提示音</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="380"/>
        <source>Eject media when finished</source>
        <translation>完成后弹出磁盘</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="384"/>
        <source>Enable telemetry</source>
        <translation>启用遥测</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="397"/>
        <source>SAVE</source>
        <translation>保存</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="111"/>
        <source>Internal SD card reader</source>
        <translation>内置SD卡读卡器</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="73"/>
        <source>Warning: advanced settings set</source>
        <translation>警告：高级设置已设置</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="87"/>
        <source>Would you like to apply the image customization settings saved earlier?</source>
        <translation>您要应用之前保存的自定义镜像设置吗？</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="96"/>
        <source>NO</source>
        <translation type="unfinished">不</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="106"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>清空所有设置</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="116"/>
        <source>YES</source>
        <translation>是</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="126"/>
        <source>EDIT SETTINGS</source>
        <translation>编辑设置</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="24"/>
        <source>Raspberry Pi Imager v%1</source>
        <translation>树莓派镜像烧录器 v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="862"/>
        <source>Are you sure you want to quit?</source>
        <translation>你确定你要退出吗？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="863"/>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Raspberry Pi Imager还未完成任务。&lt;br&gt;您确定要退出吗？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="99"/>
        <location filename="../main.qml" line="399"/>
        <source>Operating System</source>
        <translation>请选择需要写入的操作系统</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>CHOOSE OS</source>
        <translation>选择操作系统</translation>
    </message>
    <message>
        <location filename="../main.qml" line="135"/>
        <location filename="../main.qml" line="713"/>
        <source>Storage</source>
        <translation>储存卡</translation>
    </message>
    <message>
        <location filename="../main.qml" line="147"/>
        <location filename="../main.qml" line="1041"/>
        <source>CHOOSE STORAGE</source>
        <translation>选择SD卡</translation>
    </message>
    <message>
        <location filename="../main.qml" line="157"/>
        <source>Select this button to change the destination storage device</source>
        <translation>选择此按钮以更改目标存储设备</translation>
    </message>
    <message>
        <location filename="../main.qml" line="173"/>
        <source>WRITE</source>
        <translation>烧录</translation>
    </message>
    <message>
        <location filename="../main.qml" line="971"/>
        <source>Writing... %1%</source>
        <translation>写入中...%1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="218"/>
        <source>CANCEL WRITE</source>
        <translation>取消写入</translation>
    </message>
    <message>
        <location filename="../main.qml" line="123"/>
        <source>Select this button to change the operating system</source>
        <translation>更改操作系统</translation>
    </message>
    <message>
        <source>Select this button to change the destination SD card</source>
        <translation type="vanished">更改目标SD卡</translation>
    </message>
    <message>
        <location filename="../main.qml" line="177"/>
        <source>Select this button to start writing the image</source>
        <translation>开始写入</translation>
    </message>
    <message>
        <location filename="../main.qml" line="221"/>
        <location filename="../main.qml" line="968"/>
        <source>Cancelling...</source>
        <translation>取消...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="229"/>
        <source>CANCEL VERIFY</source>
        <translation>取消验证</translation>
    </message>
    <message>
        <location filename="../main.qml" line="232"/>
        <location filename="../main.qml" line="991"/>
        <location filename="../main.qml" line="1060"/>
        <source>Finalizing...</source>
        <translation>正在完成...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="247"/>
        <source>Select this button to access advanced settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="261"/>
        <source>Using custom repository: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="270"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="290"/>
        <source>Language: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="313"/>
        <source>Keyboard: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="505"/>
        <location filename="../main.qml" line="1025"/>
        <source>Erase</source>
        <translation>擦除</translation>
    </message>
    <message>
        <location filename="../main.qml" line="506"/>
        <source>Format card as FAT32</source>
        <translation>将SD卡格式化为FAT32格式</translation>
    </message>
    <message>
        <location filename="../main.qml" line="515"/>
        <source>Use custom</source>
        <translation>使用自定义镜像</translation>
    </message>
    <message>
        <location filename="../main.qml" line="516"/>
        <source>Select a custom .img from your computer</source>
        <translation>使用下载的系统镜像文件烧录</translation>
    </message>
    <message>
        <location filename="../main.qml" line="640"/>
        <source>Local file</source>
        <translation>本地文件</translation>
    </message>
    <message>
        <location filename="../main.qml" line="820"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[写保护]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="874"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="../main.qml" line="882"/>
        <source>Preparing to write...</source>
        <translation>准备写入...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="895"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>&apos;%1&apos;上的所有现有数据将被删除。&lt;br&gt;确定要继续吗？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="906"/>
        <source>Update available</source>
        <translation>检测到更新</translation>
    </message>
    <message>
        <location filename="../main.qml" line="907"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>有较新版本的rpi-imager。&lt;br&gt;需要下载更新吗？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1001"/>
        <source>Preparing to write... (%1)</source>
        <translation>写入中 (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1026"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1 &lt;/ b&gt;已被删除&lt;br&gt; &lt;br&gt;您现在可以从读取器中取出SD卡</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; 已经成功烧录到 &lt;b&gt;%2&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1101"/>
        <source>Error parsing os_list.json</source>
        <translation>解析 os_list.json 错误</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1274"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>连接包含镜像的U盘。&lt;br&gt;镜像必须位于U盘的根文件夹中。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1290"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>SD卡具有写保护。&lt;br&gt;尝试向上推SD卡的左侧的锁定开关，然后重试。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="461"/>
        <source>Back</source>
        <translation>返回</translation>
    </message>
    <message>
        <location filename="../main.qml" line="462"/>
        <source>Go back to main menu</source>
        <translation>回到主页</translation>
    </message>
    <message>
        <location filename="../main.qml" line="628"/>
        <source>Released: %1</source>
        <translation>发布时间：%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="638"/>
        <source>Cached on your computer</source>
        <translation>缓存在本地磁盘里</translation>
    </message>
    <message>
        <location filename="../main.qml" line="641"/>
        <source>Online - %1 GB download</source>
        <translation>需要下载：%1 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="766"/>
        <location filename="../main.qml" line="818"/>
        <location filename="../main.qml" line="824"/>
        <source>Mounted as %1</source>
        <translation>挂载到：%1 上</translation>
    </message>
    <message>
        <source>QUIT APP</source>
        <translation type="vanished">退出</translation>
    </message>
    <message>
        <source>CONTINUE</source>
        <translation type="vanished">继续</translation>
    </message>
    <message>
        <location filename="../main.qml" line="950"/>
        <source>Error downloading OS list from Internet</source>
        <translation>下载镜像列表错误</translation>
    </message>
    <message>
        <location filename="../main.qml" line="994"/>
        <source>Verifying... %1%</source>
        <translation>验证文件中...%1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1017"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1024"/>
        <source>Write Successful</source>
        <translation>烧录成功</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1033"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 已经成功烧录到 &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;上了，你可以卸载SD卡了</translation>
    </message>
</context>
</TS>
