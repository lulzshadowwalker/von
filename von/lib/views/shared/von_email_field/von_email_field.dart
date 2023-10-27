import 'package:enefty_icons/enefty_icons.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:validators/validators.dart';
import 'package:von/views/shared/von_form_field/von_form_field.dart';
import '../../../l10n/l10n_imports.dart';
import '../../../helpers/von_extensions.dart';

class VonEmailField extends ConsumerWidget {
  const VonEmailField({
    this.controller,
    this.initialValue,
    this.hintText,
    this.fieldKey,
    this.onSaved,
    this.validator,
    Key? key,
  }) : super(key: key);

  final TextEditingController? controller;
  final String? initialValue;
  final String? hintText;
  final GlobalKey<FormFieldState>? fieldKey;
  final void Function(String? value)? onSaved;
  final String? Function(String? value)? validator;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return VonFormField(
      formFieldKey: fieldKey,
      controller: controller,
      initialValue: initialValue,
      onSaved: onSaved,
      validator: validator ??
          (val) => isEmail('$val') ? null : VL.of(context).enterValidEmail,
      prefixIcon: const Icon(EneftyIcons.sms_notification_outline),
      hintText: hintText.isEmpty ? 'email@example.com' : hintText,
      keyboardType: TextInputType.emailAddress,
    );
  }
}
