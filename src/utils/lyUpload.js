/*
*  上传文件=到七牛云
* */

export function lyUpload(token) {
  console.log("token -- : ",token);
  var uploader = Qiniu.uploader({
    runtimes: 'html5,flash,html4',
    browse_button: 'pickfiles',
    container: 'container',
    drop_element: 'container',
    max_file_size: '100mb',
    flash_swf_url: 'js/plupload/Moxie.swf',
    dragdrop: true,
    chunk_size: '4mb',
    uptoken: token,
    unique_names: false,
    save_key: false,
    // uptoken_url: "http://120.27.46.167:8020/qiniu/upload_token",  //当然建议这种通过url的方式获取token
    domain: 'http://imgcdn.robo2025.com/',
    auto_start: true,
    log_level:1,
    init: {
      'FilesAdded': function (up, files) {
        console.log('--------------文件添加进队列后',up,files);
        // $('table').show();
        // $('#success').hide();
        // plupload.each(files, function (file) {
        //     var progress = new FileProgress(file, 'fsUploadProgress');
        //     progress.setStatus("等待...");
        //     progress.bindUploadCancel(up);
        // });
      },
      'BeforeUpload': function (up, file) {
        console.log('--------------每个文件上传前,处理相关的事情');
        // var progress = new FileProgress(file, 'fsUploadProgress');
        // var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
        // if (up.runtime === 'html5' && chunk_size) {
        //     progress.setChunkProgess(chunk_size);
        // }
      },
      'UploadProgress': function (up, file) {
        console.log('--------------每个文件上传时,处理相关的事情');
        // var progress = new FileProgress(file, 'fsUploadProgress');
        // var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
        // progress.setProgress(file.percent + "%", file.speed, chunk_size);
      },
      'UploadComplete': function () {
        console.log('--------------队列文件处理完毕后,处理相关的事情');
        // $('#success').show();
      },
      'Key': function(up, file) {
        // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
        // 该配置必须要在unique_names: false，save_key: false时才生效
        var key = "test/测试"+Math.random()*1000;
        // do something with key here
        return key;
      },
      'FileUploaded': function (up, file, info) {
        console.log('--------------文件上传完成',up,file,info);
        // var progress = new FileProgress(file, 'fsUploadProgress');
        // progress.setComplete(up, info);
      },
      'Error': function (up, err, errTip) {
        console.log("错误信息",err)
        // $('table').show();
        // var progress = new FileProgress(err.file, 'fsUploadProgress');
        // progress.setError();
        // progress.setStatus(errTip);
      }
    }
  });
  uploader.bind('FileUploaded', function (up,file,info) {
    console.log('文件上传完成',up,file,info);
  });
  $('#up_load').on('click', function () {
    uploader.start();
  });
  $('#stop_load').on('click', function () {
    uploader.stop();
  });
}
