import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appValid]',
  standalone: true
})
export class ValidDirective {

  @Input() appValid: string = ''; // Validasyon türü (URL, boşluk, vb.)
  @Input() appValidMessage: string = ''; // Validasyon mesajı

  constructor(
    private _el: ElementRef<HTMLInputElement>, //DOM elementine erişim sağlar
    private renderer: Renderer2                //DOM üzerinde stil ve sınıf işlemleri yapılır
  ) { }

  @HostListener('keyup') onKeyUp() { //her tuş bırakıldığında 
    const value = this._el.nativeElement.value; //DOM elementinin mevcut değerini alır
    let isValid = true;
    let feedbackMessage = '';

//appValid değerine göre validasyon türü belirlenir. url ise URL doğrulama yapılır, required ise alanın boş olup olmadığı kontrol edilir. Hata mesajı belirlenir
    switch (this.appValid) {
      case 'url':
        isValid = this.isValidUrl(value);
        feedbackMessage = this.appValidMessage || 'Geçerli bir URL girin';
        break;
      case 'required':
        isValid = this.isRequired(value);
        feedbackMessage = this.appValidMessage || 'Bu alan boş olamaz';
        break;
      default:
        isValid = true;
        feedbackMessage = '';
    }

    this.updateValidationClasses(isValid);
    this.updateFeedbackMessage(isValid, feedbackMessage); //Validasyon sonuçlarına göre stil ve geri bildirim güncellenir
  }
  //Verilen değerin geçerli bir URL olup olmadığını kontrol eder. URL regex kullanarak bu doğrulamayı yapar
  private isValidUrl(value: string): boolean {
    const urlPattern = new RegExp('^(https?:\\/\\/)?(www\\.)?([\\w-]+)\\.[a-z]{2,}([\\/\\w\\.-]*)*\\/?.*$', 'i');
    return urlPattern.test(value);
  }

  //Verilen değerin boş olup olmadığını ve en az 3 karakter uzunluğunda olup olmadığını kontrol eder.
  private isRequired(value: string): boolean {
    return value.trim().length > 0 && value.length >= 3;
  }

  //is-valid veya is-invalid sınıflarını ekler veya kaldırır. Bu sınıflar Bootstrap'in validasyon sınıflarıdır ve form elemanlarının doğru veya yanlış olduğunu belirtir.
  private updateValidationClasses(isValid: boolean) {
    this.renderer.removeClass(this._el.nativeElement, 'is-valid');
    this.renderer.removeClass(this._el.nativeElement, 'is-invalid');
    if (isValid) {
      this.renderer.addClass(this._el.nativeElement, 'is-valid');
    } else {
      this.renderer.addClass(this._el.nativeElement, 'is-invalid');
    }
  }

  //Validasyon sonucuna göre geri bildirim mesajını günceller. invalid-feedback sınıfına sahip olan elemente hata mesajını veya boş bir metin atar.
  private updateFeedbackMessage(isValid: boolean, message: string) {
    const feedbackElement = this._el.nativeElement.nextElementSibling as HTMLElement;
    if (feedbackElement) {
      feedbackElement.textContent = isValid ? '' : message;
    }
  }
}
