# BURATEC - Next.js (App Router) - Ready for Vercel

محتوى المشروع جاهز للنشر على Vercel عبر GitHub..  
اتبع الخطوات أدناه لنشر الموقع بسرعة..  

## 1) تحضير المستودع وادفعة إلى GitHub
1. افتح مجلد المشروع..  
2. ابدأ مستودع Git محليًا..  
```bash
git init
git add .
git commit -m "Initial commit - BURATEC site scaffold"
# أنشئ repo في GitHub ثم اربطه
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

## 2) خطوات النشر على Vercel
1. سجّل دخولك إلى https://vercel.com ..  
2. Create New Project -> Import from GitHub -> اختر المستودع..  
3. في Settings اضمن المتغيرات البيئية التالية..  
```
ADMIN_PASS_HASH=...   # ضع هاش bcrypt لكلمة المرور الادمن
NEXT_PUBLIC_DEFAULT_LANG=fr
AWS_REGION=eu-west-1
AWS_S3_BUCKET=your-bucket-name
SENTRY_DSN=            # اختياري
DATABASE_URL=file:./dev.db   # اختياري قبل الانتقال لقاعدة بيانات
```
4. Build command: `npm run build` ..  
5. Output directory: اتركه فارغا..  
6. اضغط Deploy..  

## 3) بعد النشر
- عدّل كلمة السر الافتراضية بتوليد hash عبر:
```bash
npm run hash-pass
# انسخ ADMIN_PASS_HASH الناتج واضعه في Vercel env
```
- اعداد AWS IAM وS3 قبل استعمال رفع الوسائط..  
- اختبر /admin/login وواجهات اللغات..  

## 4) ملاحظات مهمة
- لا تضف مفاتيح سرية في repo العمومي..  
- لو احتجت ربط الدومين، ضف CNAME او اتبع تعليمات Vercel لربط النطاق..  
