@component('mail::message')
# Change Password

The body of your message.

@component('mail::button', ['url' => 'http://localhost:4200/api/password-reset-response?token='.$token])
Change Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
