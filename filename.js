function a_cong_b(form) {
    a=eval(form.a.value);
    b=eval(form.b.value);
    c=a+b;
    form.ans.value = c;
}
function a_tru_b(form) {
    a=eval(form.a.value);
    b=eval(form.b.value);
    c=a-b;
    form.ans.value=c;
}
function a_nhan_b(form) {
    a=eval(form.a.value);
    b=eval(form.b.value);
    c=a*b;
    form.ans.value=c;
}
function a_chia_b(form) {
   a=eval(form.a.value);
   b=eval(form.b.value);
   c=a/b;
   form.ans.value = c;
}
function a_mu_b(form) {
   a=eval(form.a.value);
   b=eval(form.b.value);
   c=Math.pow(a, b);
   form.ans.value = c;
}