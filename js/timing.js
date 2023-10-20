let oSpan = document.getElementsByTagName("timing")[0];
let localhostTime = new Date();//��ȡҳ��򿪵�ʱ��
function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}
setInterval(function () {
    let goTime = new Date();//��ȡ��̬ʱ��
    let diffTime = goTime.getTime() - localhostTime.getTime();
    var second = Math.floor(diffTime / 1000);//δ��ʱ��������ڵ�����
    var day = Math.floor(second / 86400);//�������ִ��������죻һ����24*60*60=86400�� ��
    second = second % 86400;//��������ʣ�µ�������
    var hour = Math.floor(second / 3600);//�������ִ���Сʱ��
    second %= 3600; //�������� ʣ�µ�������

